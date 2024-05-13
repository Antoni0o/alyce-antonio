import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/client";
import { Invite } from "@prisma/client";

type CodePageParams = {
  params: {
    code: string;
  };
};

async function getInvite(code: string): Promise<Invite | null> {
  return await prisma.invite.findFirst({ where: { code: Number(code) } });
}

export default async function ValidatedInvitePage({ params: { code } }: CodePageParams) {
  const invite = await getInvite(code);

  return (
    <main className="wrapper">
      {invite &&
        <Card className="card">
          <CardHeader>
            <CardTitle>Convite</CardTitle>
            <CardDescription>Descrição bonita do convite</CardDescription>
          </CardHeader>
          <CardContent>
            {invite.name}, código {invite.code}
          </CardContent>
          <CardFooter>
            Final
          </CardFooter>
        </Card>
      }
    </main>
  )
}