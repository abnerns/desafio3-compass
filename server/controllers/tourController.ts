import { PrismaClient } from '@prisma/client';
import { IncomingMessage, ServerResponse } from 'http';

const prisma = new PrismaClient();

export const getTours = async (limit: number, offset: number, res: ServerResponse) => {
    try {
        const tours = await prisma.tour.findMany({
            skip: offset,
            take: limit,
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(tours));
        res.end();
    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
};

export const getCategories = async (res: ServerResponse) => {
    try {
        const categories = await prisma.category.findMany();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(categories));
        res.end();
    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
};

export const getCountByCategory = async (res: ServerResponse) => {
    try {
        const counts = await prisma.tour.groupBy({
            by: ['idCateg'], // agrupa pelo idCateg
            _count: {
                idCateg: true, // conta o número de tours em cada idCateg
            },
        });
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(counts));
        res.end();
    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
};


export const getCountByReview = async (res: ServerResponse) => {
    try {
      const counts = await prisma.review.groupBy({
        by: ['idTour'],
        _count: {
          id: true,
        },
      });
  
      const formattedCounts = counts.map(count => ({
        idTour: count.idTour,
        count: count._count.id,
      }));
  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(formattedCounts));
    } catch (error) {
      console.error("Erro ao buscar contagem de reviews:", error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end("Erro interno do servidor");
    }
  };

export const getLowestPrice = async (res: ServerResponse) => {
    try {
        const prices = await prisma.tour.groupBy({
            by: ['idCateg'], // agrupa pelo idCateg
            _min: {
                price: true, // encontra o menor preço em cada categoria
            },
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(prices));
        res.end();
    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
};

export const addReview = async (req: IncomingMessage, res: ServerResponse) => {
    let body = "";
    req.on("data", (chunk) => {
        body += chunk;
    });
    req.on("end", async () => {
        try {
            const parsedBody = JSON.parse(body);
            await prisma.review.create({
                data: parsedBody
            });
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Dados criados com sucesso.");
        } catch (error) {
            console.error(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
        }
    });
};

export const deleteReview = async (req: IncomingMessage, res: ServerResponse) => {
    let body = "";
    req.on("data", (chunk) => {
        body += chunk;
    });
    req.on("end", async () => {
        try {
            const { id } = JSON.parse(body);
            await prisma.review.delete({
                where: { id }
            });
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Dados excluídos com sucesso.");
        } catch (error) {
            console.error(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
        }
    });
};

export const updateReview = async (req: IncomingMessage, res: ServerResponse) => {
    let body = "";
    req.on("data", (chunk) => {
        body += chunk;
    });
    req.on("end", async () => {
        try {
            const { id, ...data } = JSON.parse(body);
            await prisma.review.update({
                where: { id },
                data
            });
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Dados atualizados com sucesso.");
        } catch (error) {
            console.error(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
        }
    });
};
