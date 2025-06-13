document.addEventListener('DOMContentLoaded', function() {
    const canvasData = {
        "key-partnerships": [
            "Estúdios de cinema e TV (licenciamento)",
            "Produtoras de conteúdo (Originais Netflix)",
            "Anunciantes e Agências de Publicidade",
            "Provedores de internet (ISPs)",
            "Fabricantes de dispositivos (Smart TVs, etc.)",
            "Provedores de nuvem (AWS)"
        ],
        "key-activities": [
            "Produção e licenciamento de conteúdo",
            "Desenvolvimento e manutenção da plataforma",
            "Análise de dados (algoritmo de recomendação)",
            "Globalização e localização de conteúdo",
            "Venda e gestão de anúncios",
            "Marketing e aquisição de clientes"
        ],
        "key-resources": [
            "Marca Netflix",
            "Vasto catálogo de conteúdo e Originais",
            "Algoritmo de recomendação proprietário",
            "Infraestrutura de streaming global (CDN)",
            "Equipe criativa e de tecnologia",
            "Plataforma de tecnologia de anúncios"
        ],
        "value-propositions": [
            "Acesso on-demand a um grande acervo",
            "Conteúdo original exclusivo e premiado",
            "Assista onde e quando quiser (planos sem comerciais)",
            "Download para visualização offline",
            "Opção de plano mais acessível com anúncios",
            "Múltiplos perfis e telas por conta"
        ],
        "customer-relationships": [
            "Plataforma self-service e personalizada",
            "Atendimento ao cliente multicanal",
            "Comunicação via e-mail e notificações",
            "Engajamento em redes sociais"
        ],
        "channels": [
            "Site oficial e aplicativos (celular, TV, etc.)",
            "Parcerias com operadoras de TV/internet (bundles)",
            "Marketing digital e tradicional"
        ],
        "customer-segments": [
            "Mercado de massa global",
            "Fãs de cinema e séries ('cord-cutters')",
            "Famílias com diferentes gostos",
            "Clientes sensíveis a preço (plano com anúncios)"
        ],
        "cost-structure": [
            "Custos de conteúdo (licenciamento e produção)",
            "Tecnologia e desenvolvimento (P&D)",
            "Marketing e publicidade",
            "Infraestrutura de streaming (servidores, CDN)",
            "Custos de tecnologia e vendas de publicidade"
        ],
        "revenue-streams": [
            "Taxas de assinatura mensal (diversos planos)",
            "Receita de publicidade (do plano com anúncios)"
        ]
    };

    for (const key in canvasData) {
        const element = document.getElementById(key);
        if (element) {
            const ul = element.querySelector('ul');
            if (ul) {
                const items = canvasData[key];
                items.forEach(itemText => {
                    const li = document.createElement('li');
                    li.textContent = itemText;
                    ul.appendChild(li);
                });
            }
        }
    }
}); 