toc.dat                                                                                             0000600 0004000 0002000 00000002752 13614201473 0014446 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP       4    ;                  x            gestorwl    11.3    12.0     t           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         u           0    0 
   STDSTRINGS 
   STDSTRINGS     )   SET standard_conforming_strings = 'off';
                      false         v           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         w           1262    16395    gestorwl    DATABASE     k   CREATE DATABASE gestorwl WITH TEMPLATE = template0 ENCODING = 'SQL_ASCII' LC_COLLATE = 'C' LC_CTYPE = 'C';
    DROP DATABASE gestorwl;
                gestorwl    false         �            1259    16495    regioes    TABLE     n   CREATE TABLE public.regioes (
    reg_codigo character varying(3),
    reg_descricao character varying(40)
);
    DROP TABLE public.regioes;
       public            sigacred    false         q          0    16495    regioes 
   TABLE DATA           <   COPY public.regioes (reg_codigo, reg_descricao) FROM stdin;
    public          sigacred    false    220       3441.dat �           1259    11852048    idx_reg_codigo    INDEX     H   CREATE INDEX idx_reg_codigo ON public.regioes USING btree (reg_codigo);
 "   DROP INDEX public.idx_reg_codigo;
       public            sigacred    false    220                              