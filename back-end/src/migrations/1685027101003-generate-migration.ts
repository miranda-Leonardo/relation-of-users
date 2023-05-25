import { MigrationInterface, QueryRunner } from "typeorm";

export class generateMigration1685027101003 implements MigrationInterface {
    name = 'generateMigration1685027101003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "additional-data" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "telephone" integer NOT NULL, CONSTRAINT "PK_900be121372a4a74ac96140caa5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "contact_userId" character varying NOT NULL, "userId" uuid, CONSTRAINT "UQ_efdbddacdfa561c3347599c191f" UNIQUE ("contact_userId"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" character varying(250) NOT NULL, "email" character varying NOT NULL, "telephone" character varying(11) NOT NULL, "registerAt" TIMESTAMP NOT NULL DEFAULT now(), "additionalDataId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_a4cbd9aa8f88cc16dfe5b07661" UNIQUE ("additionalDataId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a4cbd9aa8f88cc16dfe5b07661e" FOREIGN KEY ("additionalDataId") REFERENCES "additional-data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a4cbd9aa8f88cc16dfe5b07661e"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "additional-data"`);
    }

}
