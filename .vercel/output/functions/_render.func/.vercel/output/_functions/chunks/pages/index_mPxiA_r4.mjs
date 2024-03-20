import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_B0vvmR5r.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$u = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/layouts/Layout.astro", void 0);

const $$Astro$t = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Section;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-sh445jdo> ${title && renderTemplate`<h2 data-astro-cid-sh445jdo>${title}</h2>`} ${renderSlot($$result, $$slots["default"])} </section>  `;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/components/Section.astro", void 0);

const basics = {
	name: "Enmanuel Gerardo Alfonzo",
	label: "Full Stack Developer con más de 4 años de experiencia",
	image: "/me.webp",
	email: "14-05775@usb.ve",
	phone: "+34 688888888",
	url: "https://github.com/GEnma29",
	summary: "+4 años de experiencia como Desarrollador Web.Actualmente desempeño el cargo de Developer Lead Frontend Architect en ICIVA, donde lidero un equipo de desarrollo frontend y contribuyo a la construcción de soluciones tecnológicas de alto impacto. A lo largo de mi trayectoria, he tenido la oportunidad de trabajar en diversos entornos, desde fintech hasta SaaS, adquiriendo una amplia gama de habilidades y experiencia.",
	location: {
		address: "",
		postalCode: "1030",
		city: "Caracas",
		countryCode: "VE",
		region: "Venezuela"
	},
	profiles: [
		{
			network: "LinkedIn",
			username: "genmanuel",
			url: "https://www.linkedin.com/in/genmanuel/"
		},
		{
			network: "X",
			username: "genmanuel",
			url: "https://twitter.com/EnmanuelAlfonz6"
		},
		{
			network: "GitHub",
			username: "GEnma29",
			url: "https://github.com/GEnma29"
		}
	]
};
const work = [
	{
		name: "Enmanuel Gerardo Alfonzo",
		position: "Consultor",
		url: "",
		startDate: "2023-01-04",
		endDate: null,
		summary: [
			"En ICIVA, asumí un rol proactivo en la modernización de diversos productos principales, tanto para usuarios como para uso interno. Lideré la mejora de la plataforma de creación de eventos, integrando pasarelas de pago, implementando Socket.io para la gestión en tiempo real y creando un portal de administración por roles. Además, realicé la migración de herramientas internas a versiones modernas de Node.js. Mi experiencia en modernización de aplicaciones web, mis habilidades técnicas y mi enfoque en la resolución de problemas me permitieron contribuir significativamente al éxito de estos proyectos.",
			"En Magnettu, desempeñé un papel clave en la construcción de soluciones que mejoraron la experiencia del usuario y agilizaron la comunicación. Diseñé y desarrollé un módulo de gestión de empleados que facilitó la entrega dirigida de contenido en redes sociales. Además, mejoré el módulo de correo electrónico, creé un módulo de chat para clientes y optimicé el editor de texto para una creación de contenido eficiente. Mis habilidades de desarrollo full-stack, utilizando React, GraphQL, TypeScript, Context, OpenAPI, Node.js y Express, me permitieron contribuir significativamente al crecimiento de Magnettu."
		],
		highlights: [
			"Started the company"
		]
	},
	{
		name: "Zulu",
		position: "Senior FullStack Developer",
		url: "https://zulu.com.co/",
		startDate: "2022-06-01",
		endDate: "2023-09-01",
		summary: [
			"En mi rol como desarrollador full-stack, asumí la responsabilidad de diseñar e implementar nuevas funcionalidades para dos productos clave:",
			"Portal de administración: Creé una plataforma que permite visualizar todas las transacciones realizadas en la aplicación Zulu. ,Implementé un módulo de fraude donde se pueden ver y editar todas las transacciones sospechosas. Desarrollé un módulo de países para administrar información como proveedor de liquidez, código de área y más. Esta herramienta se construyó utilizando Next.js.",
			"Aplicación Zulu: Lideré el desarrollo de las funcionalidades necesarias para habilitar nuevos países como México y Perú. Realicé cambios en diversos módulos de la aplicación, incluyendo KYC, Ingreso de Efectivo, Retiro de Efectivo, Enviar y Recibir. Aseguré que todos los procesos se puedan modificar desde el portal de administración."
		],
		highlights: [
			"Started the company"
		]
	},
	{
		name: "Simpol",
		position: "FrontEnd Developer",
		startDate: "2021-03-01",
		url: "https://www.linkedin.com/company/simpol-by-shalder/about/",
		endDate: "2022-05-01",
		summary: [
			"Diseñé y construí una aplicación completa de monedero para obtener recompensas por staking de UST. Documenté e implementé micro-frontends dentro de la aplicación Simpol. Implementé mejoras y nuevas funcionalidades en la aplicación Simpol existente.",
			"Migré la base de código de la aplicación Simpol a React Native."
		],
		highlights: [
			"Started the company"
		]
	}
];
const education = [
	{
		institution: "Universidad Simón Bolívar",
		url: "http://www.usb.ve/",
		area: "Tecnología Electrónica",
		studyType: "Bachelor",
		startDate: "2014-12-01",
		endDate: "2020-01-01",
		score: "4.0",
		courses: [
			"DB1101 - Basic SQL"
		]
	}
];
const skills = [
	{
		name: "HTML",
		level: "Master",
		keywords: [
			"Desarrollo Web",
			"Frontend"
		]
	},
	{
		name: "CSS",
		level: "Master",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"Diseño Responsive"
		]
	},
	{
		name: "JavaScript",
		level: "Master",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"Backend",
			"Fullstack"
		]
	},
	{
		name: "Tailwind",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"CSS Framework",
			"Diseño Responsive"
		]
	},
	{
		name: "TypeScript",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"Backend",
			"JavaScript Superset"
		]
	},
	{
		name: "Node",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Backend",
			"JavaScript",
			"Servidor"
		]
	},
	{
		name: "MySQL",
		level: "Avanzado",
		keywords: [
			"Bases de Datos",
			"SQL",
			"Almacenamiento de Datos",
			"Backend"
		]
	},
	{
		name: "Git",
		level: "Avanzado",
		keywords: [
			"Control de Versiones",
			"Colaboración",
			"Código Fuente"
		]
	},
	{
		name: "GitHub",
		level: "Avanzado",
		keywords: [
			"Control de Versiones",
			"Colaboración",
			"Código Fuente",
			"Git"
		]
	},
	{
		name: "Next.js",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"React Framework",
			"SSR",
			"Static Generation"
		]
	},
	{
		name: "React",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"JavaScript Library",
			"UI"
		]
	},
	{
		name: "ReactNative",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"JavaScript Library",
			"UI"
		]
	}
];
const projects = [
	{
		name: "login web3 with next Auth",
		isActive: true,
		description: "login with web3",
		highlights: [
			"web3",
			"Nextjs"
		],
		github: "",
		url: "https://github.com/GEnma29/login-web3-next-auth"
	},
	{
		name: "FastApi with mongoDb",
		isActive: true,
		description: "FastApi microservice",
		highlights: [
			"FastApi",
			"MongoDB"
		],
		github: "",
		url: "https://github.com/GEnma29/fast-api-register/tree/main"
	},
	{
		name: "CryptoApp Native",
		isActive: true,
		description: "Crypto List",
		highlights: [
			"React Native",
			"web3"
		],
		github: "",
		url: "https://github.com/GEnma29/CryptoAppNative"
	}
];

const $$Astro$s = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$About;
  const { summary } = basics;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Sobre m\xED" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p> ${summary} </p> ` })}`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/components/sections/About.astro", void 0);

const $$Astro$r = createAstro();
const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Education;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Educaci\xF3n", "data-astro-cid-qtcj2w7e": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-qtcj2w7e> ${education.map(({ institution, startDate, endDate, area }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
    const years = `${startYear} - ${endYear}`;
    return renderTemplate`<li data-astro-cid-qtcj2w7e> <article data-astro-cid-qtcj2w7e> <header data-astro-cid-qtcj2w7e> <div data-astro-cid-qtcj2w7e> <h3 data-astro-cid-qtcj2w7e>${institution}</h3> </div> <time data-astro-cid-qtcj2w7e>${years}</time> </header> <footer data-astro-cid-qtcj2w7e> <p data-astro-cid-qtcj2w7e>${area}</p> </footer> </article> </li>`;
  })} </ul> ` })} `;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/components/sections/Education.astro", void 0);

const $$Astro$q = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Experiencia laboral", "data-astro-cid-ghubstuj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-ghubstuj> ${work.map(
    ({ name, startDate, endDate, position, summary, highlights, url }) => {
      const startYear = new Date(startDate).getFullYear();
      const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
      const years = `${startYear} - ${endYear}`;
      return renderTemplate`<li data-astro-cid-ghubstuj> <article data-astro-cid-ghubstuj> <header data-astro-cid-ghubstuj> <div data-astro-cid-ghubstuj> <h3 data-astro-cid-ghubstuj> <a${addAttribute(url, "href")}${addAttribute(`Ver ${name}`, "title")} target="_blank" data-astro-cid-ghubstuj> ${name} </a> </h3> <h4 data-astro-cid-ghubstuj>${position}</h4> </div> <time data-astro-cid-ghubstuj>${years}</time> </header> <footer data-astro-cid-ghubstuj> ${summary.map((text) => renderTemplate`<p data-astro-cid-ghubstuj>${text}</p>`)} </footer> </article> </li>`;
    }
  )} </ul> ` })} `;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/components/sections/Experience.astro", void 0);

const $$Astro$p = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-4"><title>Mail Icon</title><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/Mail.astro", void 0);

const $$Astro$o = createAstro();
const $$Phone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>Phone Icon</title><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/Phone.astro", void 0);

const $$Astro$n = createAstro();
const $$X = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/X.astro", void 0);

const $$Astro$m = createAstro();
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/LinkedIn.astro", void 0);

const $$Astro$l = createAstro();
const $$GitHub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/GitHub.astro", void 0);

const $$Astro$k = createAstro();
const $$WorldMap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$WorldMap;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path> </svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/WorldMap.astro", void 0);

const $$Astro$j = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, label, image, location, profiles, phone, email } = basics;
  const { city, region } = location;
  const SOCIAL_ICONS = {
    GitHub: $$GitHub,
    LinkedIn: $$LinkedIn,
    X: $$X
  };
  const linkedInfo = profiles.find(({ network }) => network === "LinkedIn");
  const linkedUrl = linkedInfo?.url;
  const printInfo = [email, phone, linkedUrl].filter(Boolean).join(" \u2022 ");
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-anhloy43> <div class="info" data-astro-cid-anhloy43> <h1 data-astro-cid-anhloy43>${name}</h1> <h2 data-astro-cid-anhloy43>${label}</h2> <span data-astro-cid-anhloy43> ${renderComponent($$result2, "WorldMap", $$WorldMap, { "data-astro-cid-anhloy43": true })} ${city}, ${region} </span> <footer class="print" data-astro-cid-anhloy43> ${printInfo} </footer> <footer class="no-print" data-astro-cid-anhloy43> ${email && renderTemplate`<a${addAttribute(`mailto:${email}`, "href")}${addAttribute(`Enviar un correo electr\xF3nico a ${name} al correo ${email}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Mail", $$Mail, { "data-astro-cid-anhloy43": true })} </a>`} ${phone && renderTemplate`<a${addAttribute(`tel:${phone}`, "href")}${addAttribute(`Llamar por tel\xE9fono a ${name} al n\xFAmero ${phone}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Phone", $$Phone, { "data-astro-cid-anhloy43": true })} </a>`} ${profiles.map(({ network, url, username }) => {
    const Icon = SOCIAL_ICONS[network];
    return renderTemplate`<a${addAttribute(url, "href")}${addAttribute(`Visitar el perfil de ${name} en ${network}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-anhloy43": true })} </a>`;
  })} </footer> </div> <figure data-astro-cid-anhloy43> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} data-astro-cid-anhloy43> </figure> </div> ` })} `;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/components/sections/Hero.astro", void 0);

const $$Astro$i = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Proyectos", "data-astro-cid-44zkpkd5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-44zkpkd5> ${projects.map(
    ({ url, description, highlights, name, isActive, github }) => {
      return renderTemplate`<li data-astro-cid-44zkpkd5> <article data-astro-cid-44zkpkd5> <header data-astro-cid-44zkpkd5> <h3 data-astro-cid-44zkpkd5> <a${addAttribute(url, "href")} target="_blank"${addAttribute(`Ver el proyecto ${name}`, "title")} data-astro-cid-44zkpkd5> ${name} </a> ${isActive && renderTemplate`<span data-astro-cid-44zkpkd5>•</span>`} ${github && renderTemplate`<a class="github-code-link"${addAttribute(github, "href")} target="_blank"${addAttribute(`Ver c\xF3digo fuente del proyecto ${name}`, "title")} data-astro-cid-44zkpkd5> ${renderComponent($$result2, "GitHub", $$GitHub, { "data-astro-cid-44zkpkd5": true })} </a>`} </h3> <p data-astro-cid-44zkpkd5>${description}</p> </header> <footer data-astro-cid-44zkpkd5> ${highlights.map((highlight) => {
        return renderTemplate`<span data-astro-cid-44zkpkd5>${highlight}</span>`;
      })} </footer> </article> </li>`;
    }
  )} </ul> ` })} `;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/components/sections/Projects.astro", void 0);

const $$Astro$h = createAstro();
const $$Html = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/html.astro", void 0);

const $$Astro$g = createAstro();
const $$Css = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Css;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/css.astro", void 0);

const $$Astro$f = createAstro();
const $$Javascript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Javascript;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M7.5 8h3v8l-2 -1"></path><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/javascript.astro", void 0);

const $$Astro$e = createAstro();
const $$Type = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Type;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"></path><path d="M9 12h4"></path><path d="M11 12v6"></path><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/type.astro", void 0);

const $$Astro$d = createAstro();
const $$React = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/react.astro", void 0);

const $$Astro$c = createAstro();
const $$ReactNative = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ReactNative;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/reactNative.astro", void 0);

const $$Astro$b = createAstro();
const $$Node = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Node;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/node.astro", void 0);

const $$Astro$a = createAstro();
const $$Sql = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Sql;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"></path><path d="M9 7h.01"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/sql.astro", void 0);

const $$Astro$9 = createAstro();
const $$Git = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Git;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 15v-6"></path><path d="M15 11l-2 -2"></path><path d="M11 7l-1.9 -1.9"></path><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/git.astro", void 0);

const $$Astro$8 = createAstro();
const $$Tailwind = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/tailwind.astro", void 0);

const $$Astro$7 = createAstro();
const $$Next = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Next;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path><path d="M15 12v-3"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/next.astro", void 0);

const $$Astro$6 = createAstro();
const $$Swift = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Swift;
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M729.173 841.387c-100.693 58.026-238.506 64-378.026 4.266A589.099 589.099 0 0 1 85.333 618.667c28.587 23.466 62.294 42.666 98.134 59.733 143.786 66.987 287.146 62.293 388.266 0-143.786-110.507-266.24-254.293-357.12-371.627-19.2-19.2-33.28-43.093-47.786-64.426 353.28 258.133 337.92 323.84 102.826-43.094C478.293 410.027 672 529.493 672 529.493c6.827 3.84 10.667 6.827 15.36 9.387 4.267-10.667 8.107-21.76 11.093-33.28 33.707-121.6-4.693-261.12-88.746-375.893C803.84 247.04 919.04 467.2 870.827 651.947c-1.28 4.693-2.56 9.386-2.134 16.64 95.574 120.746 69.974 246.613 57.6 222.72-51.626-101.974-148.48-70.4-197.12-49.92z"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/swift.astro", void 0);

const $$Astro$5 = createAstro();
const $$Swiftui = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Swiftui;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 50 50" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14.182 5C9.122 5 5 9.122 5 14.182v21.636C5 40.878 9.122 45 14.182 45h21.636C40.878 45 45 40.878 45 35.818V14.182C45 9.122 40.878 5 35.818 5H14.182zm0 2h21.636A7.166 7.166 0 0 1 43 14.182v21.636A7.166 7.166 0 0 1 35.818 43H14.182A7.166 7.166 0 0 1 7 35.818V14.182A7.166 7.166 0 0 1 14.182 7zm12.816 6.033c2.078 4.156 3.283 6.5 2.307 12.227C27.079 23.774 18.855 17.152 17 15c1.336 2.375 5.18 7.586 6.516 8.922-2.375-1.632-10.02-7.645-10.02-7.645s6.532 9.871 12.024 13.211c-2.078.668-6.59 3.398-14.457-1.425 2.003 2.745 5.55 8.255 14.234 7.736 3.043-.148 4.896-1.113 6.603-1.781 1.707-.668 3.34-.595 4.75 1.93.297-2.302.371-4.454-2.004-6.903 0 0 2.348-8.95-7.648-16.012z"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/swiftui.astro", void 0);

const $$Astro$4 = createAstro();
const $$Kotlin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Kotlin;
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M55.467 1024 537.6 533.333 1024 1024zM0 0h512L0 533.333zm571.733 0L0 597.333V1024l512-512L1024 0z"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/kotlin.astro", void 0);

const $$Astro$3 = createAstro();
const $$Flutter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Flutter;
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M610.73 0 98.134 512 256 669.867 925.184.512H611.285L610.731 0zm.598 472.405L335.232 747.904l276.053 276.053h314.582L650.24 747.99l275.627-275.626H611.37z"></path></svg>`;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/icons/flutter.astro", void 0);

const $$Astro$2 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Skills;
  const SKILLS_ICONS = {
    HTML: $$Html,
    CSS: $$Css,
    JavaScript: $$Javascript,
    TypeScript: $$Type,
    React: $$React,
    Node: $$Node,
    ReactNative: $$ReactNative,
    MySQL: $$Sql,
    Git: $$Git,
    GitHub: $$GitHub,
    Next: $$Next,
    Tailwind: $$Tailwind,
    Swift: $$Swift,
    SwiftUI: $$Swiftui,
    Kotlin: $$Kotlin,
    Flutter: $$Flutter
  };
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Habilidades", "data-astro-cid-sye7xtqh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-sye7xtqh> ${skills.map(({ name }) => {
    const iconName = name === "Next.js" ? "Next" : name;
    const Icon = SKILLS_ICONS[iconName];
    return renderTemplate`<li data-astro-cid-sye7xtqh> ${Icon && renderTemplate`${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-sye7xtqh": true })}`} <span data-astro-cid-sye7xtqh>${name}</span> </li>`;
  })} </ul> ` })} `;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/components/sections/Skills.astro", void 0);

const $$Astro$1 = createAstro();
const $$KeyboardManager = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$KeyboardManager;
  const { profiles } = basics;
  const SOCIAL_ICONS = {
    GitHub: `<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><path
    fill="currentColor"
    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  ></path></svg
>`,
    LinkedIn: `<svg
  height="16"
  width="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><title>LinkedIn</title><path
    fill="currentColor"
    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  ></path></svg
>`,
    X: `<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><title>X</title><path
    fill="currentColor"
    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
  ></path></svg
>
`
  };
  const profilesInfo = profiles.map(({ network, url }) => {
    const icon = SOCIAL_ICONS[network];
    const firstLetter = network[0].toUpperCase();
    return {
      id: network,
      section: "Social",
      title: `Visitar ${network}`,
      url,
      icon,
      hotkey: `ctrl+${firstLetter}`
    };
  });
  return renderTemplate`${maybeRenderHead()}<footer id="normal-footer" class="no-print" data-astro-cid-5uazswxx>
Pulsa <kbd data-astro-cid-5uazswxx>Cmd</kbd> + <kbd data-astro-cid-5uazswxx>K</kbd> para abrir la paleta de comandos.
</footer> <div id="footer-button" class="no-print" data-astro-cid-5uazswxx> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-command" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#777" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5uazswxx> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-5uazswxx></path> <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" data-astro-cid-5uazswxx></path> </svg> </div> <div id="hotkeypad" data-placeholder="Buscar comando"${addAttribute(JSON.stringify(profilesInfo), "data-info")} data-astro-cid-5uazswxx></div>  `;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/components/KeyboardManager.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { name, label } = basics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Portafolio de ${name} - ${label}`, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Education", $$Education, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "KeyboardManager", $$KeyboardManager, { "data-astro-cid-j7pv25f6": true })} ` })} <!-- <div>
  <main>
    <h2>Hola
    </h2>
    {
      session ? 
      <>
      <p>Hola {session.user?.email}</p>
      <SignOut>Cerrar session</SignOut>
      </>
      : <SignIn provider={"google"}>Iniciar con google</SignIn>
    }
  </main>
</div> --> `;
}, "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/pages/index.astro", void 0);

const $$file = "/Users/enmanuelalfonzo/personal/porrfolio-astro/portfolio-web/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
