/*
  Warnings:

  - Added the required column `timeSince` to the `Timer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Timer" ADD COLUMN     "timeSince" INTEGER NOT NULL;
