import http from 'http';
import { PrismaClient } from '@prisma/client';
import { getTours, getCategories, getCountByCategory, getCountByReview, getLowestPrice, addReview, deleteReview, updateReview } from "../controllers/tourController"

const prisma = new PrismaClient();

const server = http.createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "GET" && req.url?.startsWith("/tours")) {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const limit = parseInt(url.searchParams.get("limit") || "9");
        const offset = parseInt(url.searchParams.get("offset") || "0");

        getTours(limit, offset, res);

    } else if (req.method === "GET" && req.url === "/categories") {
        getCategories(res);

    } else if (req.method === "GET" && req.url === "/countByCategory") {
        getCountByCategory(res);

    } else if (req.method === "GET" && req.url === "/lowestPrice") {
        getLowestPrice(res);

    } else if (req.method === "GET" && req.url === "/countByReview") {
        getCountByReview(res);

    } else if (req.method === "POST") {
        addReview(req, res);

    } else if (req.method === "DELETE") {
        deleteReview(req, res);

    } else if (req.method === "PUT") {
        updateReview(req, res);

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Not Found");
    }
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Servidor escutando no porto ${PORT}`);
});
