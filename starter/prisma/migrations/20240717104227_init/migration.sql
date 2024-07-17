-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" VARCHAR(900) NOT NULL,
    "tools" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "front" TEXT NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "About" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "AboutMe" VARCHAR(900) NOT NULL,

    CONSTRAINT "About_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Port" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" VARCHAR(900) NOT NULL,

    CONSTRAINT "Port_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);
