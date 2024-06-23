import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/client";
import { Invite } from "@prisma/client";
import './invite-style.css';
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

type CodePageParams = {
  params: {
    code: string;
  };
};

async function getInvite(code: string): Promise<Invite | null> {
  return await prisma.invite.findFirst({ where: { code: code } });
}

export async function generateMetadata(
  { params }: CodePageParams,
): Promise<Metadata> {
  // read route params
  const invite = await getInvite(params.code);

  if (invite) {
    return {
      title: "Convite para o casamento",
      description: `Olá, ${invite?.name}! Seu código é: ${invite.code}; use no próximo acesso`,
    }
  }

  return {
    title: "Convite para o casamento",
    description: `Convite não encontrado :/`
  }
}

export default async function ValidatedInvitePage({ params: { code } }: CodePageParams) {
  const invite = await getInvite(code);

  return (
    <main className="wrapper">
      {invite ? (
        <Card className="invite-card">
          <div className="header-and-body">
            <CardHeader>
              <CardTitle className="title">Convite</CardTitle>
              <CardDescription className="subtitle">De: Alyce e Antonio - Para: {invite.name}</CardDescription>
              <hr className="mb-6" />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <p>
                É com alegria que convidamos você para nossa cerimônia de casamento! Será um momento muito feliz para nós e sua presença é extremamente importante. Te esperamos lá!
              </p>
              <p className="italic">
                “E lhes darei um mesmo coração, e um só caminho, para que me temam todos os dias, para seu bem, e o bem de seus filhos, depois deles” – Jeremias 32:39
              </p>
              <hr className="my-2" />
              <div className="ceremony-info">
                <p>A cerimônia ocorrerá no dia 20 de julho, às 10:00</p>
                <p>O endereço para celebrar esse momento conosco é: Rua MMDC, 117, Vila Passos, Lorena - SP</p>
              </div>
            </CardContent>
          </div>
          <div className="footer-wrapper">
            <div className="flex p-4 justify-end text-sm">
              <p className="w-64 text-center border-b-2 border-yellow-400">Com carinho, Alyce e Antonio</p>
            </div>
            <hr className="mb-6" />
            <CardFooter className="flex-col">
              <span className="help-text">Quer nos presentear? <Link className="help-link" href='/presentes'>Clique aqui</Link></span>
            </CardFooter>
          </div>
        </Card>
      ) : (
        <Card className="invite-card">
          <div className="flex flex-col justify-center items-center text-center w-full h-full py-10 px-4">
            <h1 className="text-4xl font-bold">Convite não encontrado</h1>
            <span className="text-muted-foreground">Não temos um convite com este código. Verfique o código, tente novamente, ou entre em contato com a gente!</span>
            <span className="text-muted-foreground mt-6 text-base">Para voltar <Link className="help-link" href='/convite'>Clique aqui</Link></span>
          </div>
        </Card>
      )}
    </main>
  )
}