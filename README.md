# Orchidee Bianco — site institucional

Site de página única, estático (HTML + CSS + JS puro, sem build e sem dependências).
Paleta preta, dourada e branca, com orquídea em traço dourado como marca decorativa.

## Como abrir

Basta abrir o `index.html` no navegador (duplo clique).
Para testar como ficará no servidor:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Estrutura

```
index.html              página completa (todas as seções)
assets/css/styles.css   estilos
assets/js/main.js       menu mobile, cabeçalho, animações de entrada
assets/img/             logo, favicon e as 5 fotos da coleção
orchidee_images/        fotos originais (backup, não usadas pelo site)
```

## Dados da loja (já preenchidos)

| Item | Valor |
|------|-------|
| Endereço | Condomínio Mansões Entrelagos — Etapa 2, Quadra 2, Conjunto 03, Lote 33, Loja 2 — Brasília – DF |
| Horários | Segunda a sábado, 10h — 19h · domingo fechado |
| WhatsApp / telefone | (61) 99875-8000 |
| Instagram | @orchidee_bianco |

Os links de WhatsApp já abrem com a mensagem pronta
*"Oi! Vim pelo site e gostaria de agendar um atendimento."*

O `index.html` também traz um bloco **JSON-LD** com esses dados
(endereço, coordenadas, horário, telefone, nota 5,0) — é o que o Google lê
para exibir a loja na busca. Se algum dado mudar, atualize nos dois lugares:
no texto da seção *Visite* e no JSON-LD do `<head>`.

## O que ainda falta

Procure por `EDITAR:` no `index.html`:

| # | Item | Onde |
|---|------|------|
| 1 | **E-mail** (opcional) | seção *Visite* — a linha está comentada, é só descomentar |
| 2 | **Bairro/CEP**, se quiser detalhar o endereço | seção *Visite* e JSON-LD |

## Fotos da coleção

A galeria tem 5 peças, nesta ordem:

| Quadro | Arquivo | Legenda |
|--------|---------|---------|
| Vestidos | `assets/img/vestidos.jpg` | Festa e madrinha |
| Alfaiataria | `assets/img/alfaiataria.jpg` | Do trabalho ao jantar |
| Dia a dia | `assets/img/dia-a-dia.jpg` | Conforto com elegância |
| Lingerie | `assets/img/lingerie.jpg` | Renda e delicadeza |
| Acessórios | `assets/img/acessorios.jpg` | O detalhe que completa |

Os originais continuam em `orchidee_images/` — a pasta não é usada pelo site,
pode apagar ou guardar como backup.

**Para trocar uma foto:** substitua o arquivo em `assets/img/` mantendo o mesmo nome.
Nada mais precisa mudar. Só vale atualizar o texto do `alt` no `index.html`
(descrição da peça) — é o que o Google lê e o que leitores de tela falam.

**Para acrescentar uma peça:** copie um bloco `<figure class="piece">` no `index.html`
e ajuste `src`, `alt`, título e legenda. A galeria se reorganiza sozinha e centraliza
a última linha, seja qual for a quantidade.

As fotos são verticais (9:16) e o quadro é 3:4, então o topo e a base são cortados —
o recorte é feito pelo centro. Se alguma peça ficar mal enquadrada, dá para ajustar
com `object-position` (ex.: `object-position: center 30%`) no CSS.
Formato ideal para novas fotos: retrato, ~900 × 1200 px, até 300 KB.

## Logo

A logo enviada tem 150 × 150 px, o suficiente para o cabeçalho e o favicon.
Se tiver o arquivo original em alta (PNG com fundo transparente ou vetor),
substitua o `assets/img/logo.jpg` — fica mais nítida em telas retina.

## Puxar as fotos do Instagram automaticamente?

Não dá para raspar o perfil: o Instagram entrega a página vazia e carrega o feed
por JavaScript atrás de login — um script simples recebe só o título. As opções reais são:

1. **Salvar as fotos e colocar em `assets/img/`** — foi o que fizemos. Site rápido,
   visual sob controle e nenhuma dependência externa. Como as peças giram, vale
   trocar as fotos de vez em quando (ver *Fotos da coleção*).
2. **Embed oficial de posts** (`blockquote` + `embed.js` do próprio Instagram). Funciona
   sem chave de API, mas cada post vem com a moldura visual do Instagram, que destoa
   do restante do site, e deixa a página mais pesada.
3. **Widget de terceiros** (Behold, LightWidget, SnapWidget, Elfsight). Atualiza sozinho
   conforme você posta; exige conectar a conta e carrega script externo. Há planos gratuitos.
4. **API oficial da Meta** — a Basic Display API foi desativada no fim de 2024; hoje exige
   conta Business/Creator, app na Meta e renovação de token. Trabalhoso demais para o caso.

## Publicar

Por ser um site estático, pode ir para qualquer hospedagem gratuita:
Netlify, Vercel, GitHub Pages ou Cloudflare Pages — é só arrastar a pasta.
Depois vale cadastrar o endereço do site no perfil do Google
(o card da loja hoje está com o campo "Adicionar website" vazio) e na bio do Instagram.
