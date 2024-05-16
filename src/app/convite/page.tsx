'use client';

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import './invite-validation-style.css';

export default function InvitationPage() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="wrapper">
      <Card className="validation-card">
        <CardHeader>
          <CardTitle>Validação de Convite</CardTitle>
          <CardDescription>Digite o código do seu convite</CardDescription>
        </CardHeader>
        <CardContent className="card-body">
          <InputOTP className="input" maxLength={4} pattern={REGEXP_ONLY_DIGITS} value={code} onChange={value => setCode(value)}>
            <InputOTPGroup>
              <InputOTPSlot className="input-slot" index={0} />
              <InputOTPSlot className="input-slot" index={1} />
            </InputOTPGroup>
            <InputOTPSeparator></InputOTPSeparator>
            <InputOTPGroup>
              <InputOTPSlot className="input-slot" index={2} />
              <InputOTPSlot className="input-slot" index={3} />
            </InputOTPGroup>
          </InputOTP>
        </CardContent>
        <CardFooter className="card-footer">
          <Button className="invitation-button" onClick={() => setIsLoading(true)} disabled={isLoading || code.length != 4}>
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Carregando...
              </>
            )
              : (
                <Link href={'/convite/' + code} className="w-full">Enviar</Link>
              )}
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}