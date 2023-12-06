-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userame" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userame_key" ON "User"("userame");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
