"use strict";(self.webpackChunk_sb1_designsystem_cms=self.webpackChunk_sb1_designsystem_cms||[]).push([[753],{88426:function(a,e,n){n.r(e),n.d(e,{_frontmatter:function(){return o},default:function(){return N}});var t,s=n(63366),p=(n(67294),n(63497)),r=n(31105),m=["components"],o={},l=(t="DSExample",function(a){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",a)}),k={_frontmatter:o},c=r.Z;function N(a){var e=a.components,n=(0,s.Z)(a,m);return(0,p.kt)(c,Object.assign({},k,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h2",null,"Bruk av grid"),(0,p.kt)("p",null,"Vi bruker et grid til å styre layouten på sidene våre. På små skjermer er gridet på 4 kolonner,\npå mellomstore skjermer 6 kolonner og på store skjermer 12 kolonner."),(0,p.kt)("p",null,"Det kan være mange grids per side, men man kan ikke ha grids inni andre grids."),(0,p.kt)(l,{name:"grid_Grid",mdxType:"DSExample"}),(0,p.kt)("p",null,"Du kan la kolonner være bredere på små skjermer og smalere på mindre skjermer:"),(0,p.kt)(l,{name:"grid_Grid_4col",mdxType:"DSExample"}),(0,p.kt)("p",null,"En rad kan ha mange forskjellige bakgrunnsfarger:"),(0,p.kt)(l,{name:"grid_GridRow_background",mdxType:"DSExample"}),(0,p.kt)("p",null,"En kolonne kan også ha bakgrunnsfarger. De vil da være utfallende, slik at selve innholdet vil forholde seg til griden."),(0,p.kt)(l,{name:"grid_GridCol_background",mdxType:"DSExample"}),(0,p.kt)("h2",null,"Gridkomponenter"),(0,p.kt)("h3",null,"Grid"),(0,p.kt)("p",null,"Gridet består av tre komponenter - ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"<Grid />"),", ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"<GridRow />")," og ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"<GridCol />")," - grid, rad og kolonne."),(0,p.kt)("p",null,"Det kan være mange grids per side, men man kan ikke ha grids inni andre grids. ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"Grid"),"-komponenten brukes til å lage layout på side-nivå."),(0,p.kt)("p",null,"Det finnes en rekke modifiers på alle tre komponentene som lar deg manipulere hvor innholdet skal plassere seg i en\nkolonne. Ta en titt på prop-types for å finne disse."),(0,p.kt)(l,{name:"grid_Grid",mdxType:"DSExample"}),(0,p.kt)("p",null,"Merk at designet for layout skal være basert på 4 kolonner på ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"sm")," skjermer, 6 på ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"md")," og 12 på ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"lg")," mens i APIet til ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"GridCol")," sendes det inn\ntall fra 0-12 for alle størrelsene. I praksis betyr det at man selv må konvertere fra 12 kolonner til riktig antall på ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"sm")," og ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"md"),". For\n",(0,p.kt)("code",{parentName:"p",className:"language-text"},"sm")," innebærer det at hver kolonne har bredde 3, slik at man må bruke multiplum av 3 for alle verdier som sendes inn til ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"cols")," eller ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"offset"),"\npropertyene. For ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"md")," har hver kolonne bredde 2 og man må bruke multiplum av 2."),(0,p.kt)("p",null,"Riktig, oppgitte verdier er multiplum av 3 for ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"sm")," og 2 for ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"md"),":"),(0,p.kt)("div",{className:"gatsby-highlight","data-language":"jsx"},(0,p.kt)("pre",{parentName:"div",className:"language-jsx"},(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token class-name"},"Grid")),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,p.kt)("span",{parentName:"code",className:"token plain-text"},"\n    "),(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token class-name"},"GridRow")),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,p.kt)("span",{parentName:"code",className:"token plain-text"},"\n        "),(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token class-name"},"GridCol"))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"sm"),(0,p.kt)("span",{parentName:"span",className:"token script language-javascript"},(0,p.kt)("span",{parentName:"span",className:"token script-punctuation punctuation"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{")," cols",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"6"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},",")," offset",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"3")," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"md"),(0,p.kt)("span",{parentName:"span",className:"token script language-javascript"},(0,p.kt)("span",{parentName:"span",className:"token script-punctuation punctuation"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{")," cols",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"4"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},",")," offset",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"4")," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"))," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"/>")),(0,p.kt)("span",{parentName:"code",className:"token plain-text"},"\n    "),(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),(0,p.kt)("span",{parentName:"span",className:"token class-name"},"GridRow")),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,p.kt)("span",{parentName:"code",className:"token plain-text"},"\n"),(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),(0,p.kt)("span",{parentName:"span",className:"token class-name"},"Grid")),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">"))))),(0,p.kt)("p",null,"Galt:"),(0,p.kt)("div",{className:"gatsby-highlight","data-language":"jsx"},(0,p.kt)("pre",{parentName:"div",className:"language-jsx"},(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token class-name"},"Grid")),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,p.kt)("span",{parentName:"code",className:"token plain-text"},"\n    "),(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token class-name"},"GridRow")),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,p.kt)("span",{parentName:"code",className:"token plain-text"},"\n        "),(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token class-name"},"GridCol"))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"sm"),(0,p.kt)("span",{parentName:"span",className:"token script language-javascript"},(0,p.kt)("span",{parentName:"span",className:"token script-punctuation punctuation"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{")," cols",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"2"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},",")," offset",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"3")," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"md"),(0,p.kt)("span",{parentName:"span",className:"token script language-javascript"},(0,p.kt)("span",{parentName:"span",className:"token script-punctuation punctuation"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{")," cols",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"5"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},",")," offset",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"4")," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"))," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"/>")),(0,p.kt)("span",{parentName:"code",className:"token plain-text"},"\n    "),(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),(0,p.kt)("span",{parentName:"span",className:"token class-name"},"GridRow")),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,p.kt)("span",{parentName:"code",className:"token plain-text"},"\n"),(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),(0,p.kt)("span",{parentName:"span",className:"token class-name"},"Grid")),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">"))))),(0,p.kt)("p",null,"Det blir varslet om dette til ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"console.error")," i dev-versjonen av FFE, men det er ingen varsler om man bygger prod-versjonen av koden.\nSelvom det fungerer å bruke andre verdier er det ikke meningen at man skal gjøre, og side-layout skal heller ikke være basert på at man\nmå gjøre det annerledes."),(0,p.kt)("p",null,"Når man bruker ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"<InlineGrid>")," til å style komponenter og ikke jobber med layout på side-nivå kan man bruke alle 12 verdiene."),(0,p.kt)("h3",null,"InlineGrid"),(0,p.kt)("p",null,(0,p.kt)("code",{parentName:"p",className:"language-text"},"InlineGrid")," er et alternativ til ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"Grid"),", men uten noen form for spacing i grid, rader eller kolonner. ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"<InlineGrid />")," er i struktur identisk med ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"<Grid />")," - den tar i mot de samme modifierne, bruker samme props (minus ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"condensed")," og ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"topPadding"),") og bygger rader og kolonner med ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"<GridRow />")," og ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"<GridCol />"),"."),(0,p.kt)(l,{name:"grid_InlineGrid",mdxType:"DSExample"}),(0,p.kt)("p",null,(0,p.kt)("code",{parentName:"p",className:"language-text"},"InlineGrid")," kan nøstes, i motsetning til ",(0,p.kt)("code",{parentName:"p",className:"language-text"},"Grid"),". Med andre ord kan man ha flere grids inni hverandre. Denne komponenten er ideell til å lage layout på lavere nivå, som i komponenter, skjemaer, widgeter og lignende."),(0,p.kt)(l,{name:"grid_InlineGrid_nested",mdxType:"DSExample"}))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-komponenter-grid-md-c9feb508a219a5b0f382.js.map