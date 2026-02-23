const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="max-w-md text-center space-y-8">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Cliquez sur le bouton ci-dessous pour rejoindre notre groupe WhatsApp maintenant
        </h1>

        <a
          href="https://mcp.chariow.com/public/?store=store_x3ku7ackwpnf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-primary px-12 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl hover:scale-105 active:scale-100"
        >
          REJOINDRE
        </a>
      </div>
    </div>
  );
};

export default Index;
