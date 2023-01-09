-- CreateTable
CREATE TABLE "acessos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "access_key" TEXT NOT NULL,
    "status" TEXT DEFAULT 'ativado',
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "arquivado" BOOLEAN DEFAULT false
);

-- CreateTable
CREATE TABLE "metodos_pagamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "status" TEXT DEFAULT 'ativado',
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "arquivado" BOOLEAN DEFAULT false
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_transacao" INTEGER,
    "id_cliente" INTEGER,
    "total" REAL NOT NULL,
    "status" TEXT DEFAULT 'finalizado',
    "id_acesso" INTEGER NOT NULL,
    "id_metodo_pagamento" INTEGER NOT NULL,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "arquivado" BOOLEAN DEFAULT false,
    CONSTRAINT "pedidos_id_acesso_fkey" FOREIGN KEY ("id_acesso") REFERENCES "acessos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pedidos_id_metodo_pagamento_fkey" FOREIGN KEY ("id_metodo_pagamento") REFERENCES "metodos_pagamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "acessos_id_key" ON "acessos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "acessos_login_key" ON "acessos"("login");

-- CreateIndex
CREATE UNIQUE INDEX "acessos_access_key_key" ON "acessos"("access_key");

-- CreateIndex
CREATE UNIQUE INDEX "metodos_pagamento_id_key" ON "metodos_pagamento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pedidos_id_key" ON "pedidos"("id");
