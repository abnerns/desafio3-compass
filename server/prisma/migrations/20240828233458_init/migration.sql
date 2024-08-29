-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tour" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "date_start" TEXT NOT NULL,
    "avgReview" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "maxPeople" INTEGER NOT NULL,
    "minAge" INTEGER NOT NULL,
    "idCateg" INTEGER NOT NULL,
    CONSTRAINT "Tour_idCateg_fkey" FOREIGN KEY ("idCateg") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idTour" INTEGER NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "services" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "location" INTEGER NOT NULL,
    "food" INTEGER NOT NULL,
    "amenities" INTEGER NOT NULL,
    "comfort" INTEGER NOT NULL,
    CONSTRAINT "Review_idTour_fkey" FOREIGN KEY ("idTour") REFERENCES "Tour" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
