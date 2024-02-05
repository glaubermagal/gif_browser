-- CreateTable
CREATE TABLE "SearchHistory" (
    "id" SERIAL NOT NULL,
    "query" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SearchHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SearchHistory_query_key" ON "SearchHistory"("query");
