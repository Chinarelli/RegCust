toc.dat                                                                                             0000600 0004000 0002000 00000005541 13614201334 0014441 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP           :                  x            gestorwl    11.3    12.0 	    v           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         w           0    0 
   STDSTRINGS 
   STDSTRINGS     )   SET standard_conforming_strings = 'off';
                      false         x           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         y           1262    16395    gestorwl    DATABASE     k   CREATE DATABASE gestorwl WITH TEMPLATE = template0 ENCODING = 'SQL_ASCII' LC_COLLATE = 'C' LC_CTYPE = 'C';
    DROP DATABASE gestorwl;
                gestorwl    false         �            1259    16411    clientes    TABLE       CREATE TABLE public.clientes (
    cli_codigo character varying(10),
    cli_fantasia character varying(80),
    cli_razaosocial character varying(80),
    cli_endereco character varying(150),
    cli_bairro character varying(50),
    cli_mun_codigo character varying(5),
    cli_cep character varying(9),
    cli_cnpj character varying(18),
    cli_inscest character varying(15),
    cli_fone1 character varying(14),
    cli_fone2 character varying(14),
    cli_fax character varying(14),
    cli_reg_codigo character varying(5),
    cli_email character varying(60),
    cli_homepage character varying(50),
    cli_dtalteracao date,
    cli_status character varying(10),
    cli_dtcad date,
    cli_codvinc character varying(4),
    cli_codunidade character varying(3)
);
    DROP TABLE public.clientes;
       public            sigacred    false         s          0    16411    clientes 
   TABLE DATA           $  COPY public.clientes (cli_codigo, cli_fantasia, cli_razaosocial, cli_endereco, cli_bairro, cli_mun_codigo, cli_cep, cli_cnpj, cli_inscest, cli_fone1, cli_fone2, cli_fax, cli_reg_codigo, cli_email, cli_homepage, cli_dtalteracao, cli_status, cli_dtcad, cli_codvinc, cli_codunidade) FROM stdin;
    public          sigacred    false    197       3443.dat �           1259    11852039    idx_cli_cnpj    INDEX     E   CREATE INDEX idx_cli_cnpj ON public.clientes USING btree (cli_cnpj);
     DROP INDEX public.idx_cli_cnpj;
       public            sigacred    false    197         �           1259    11852040    idx_cli_codigo    INDEX     I   CREATE INDEX idx_cli_codigo ON public.clientes USING btree (cli_codigo);
 "   DROP INDEX public.idx_cli_codigo;
       public            sigacred    false    197         �           1259    11852041    idx_cli_fantasia    INDEX     M   CREATE INDEX idx_cli_fantasia ON public.clientes USING btree (cli_fantasia);
 $   DROP INDEX public.idx_cli_fantasia;
       public            sigacred    false    197                                                                                                                                                                       