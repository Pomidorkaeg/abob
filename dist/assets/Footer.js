import{j as e,X as m,u as j,I as p,F as u,g as f,M as w,r as N,s as v}from"./ui-vendor.js";import{r,u as g,L as t}from"./react-vendor.js";import{c as a}from"./index.js";const z=()=>{const[i,n]=r.useState(!1),[x,l]=r.useState(!1),h=g();r.useEffect(()=>{const s=()=>{window.scrollY>10?l(!0):l(!1)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const d=()=>n(!i),c=s=>h.pathname===s,o=[{name:"Главная",path:"/"},{name:"Команда",path:"/team"},{name:"Новости",path:"/news"},{name:"Матчи",path:"/matches"},{name:"Соревнования",path:"/tournaments"},{name:"Медиа",path:"/media"},{name:"Контакты",path:"/contacts"}];return e.jsxs("header",{className:a("fixed top-0 left-0 right-0 z-50 transition-all duration-300",x?"bg-white/95 backdrop-blur-md shadow-sm":"bg-transparent"),children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center py-4",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(t,{to:"/",className:"flex items-center space-x-2",onClick:()=>n(!1),children:e.jsx("span",{className:"text-fc-green font-bold text-xl",children:"ФК ГУДАУТА"})})}),e.jsx("nav",{className:"hidden md:flex space-x-1",children:o.map(s=>e.jsx(t,{to:s.path,className:a("nav-link",c(s.path)?"active-nav-link text-fc-green":"text-gray-700 hover:text-fc-green"),children:s.name},s.path))}),e.jsxs("button",{onClick:d,className:"md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-fc-green focus:outline-none",children:[e.jsx("span",{className:"sr-only",children:"Open main menu"}),i?e.jsx(m,{className:"h-6 w-6"}):e.jsx(j,{className:"h-6 w-6"})]})]})}),e.jsx("div",{className:a("md:hidden fixed inset-x-0 top-[4rem] bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out transform origin-top",i?"opacity-100 scale-y-100 shadow-lg":"opacity-0 scale-y-0 pointer-events-none"),children:e.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:o.map(s=>e.jsx(t,{to:s.path,className:a("block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150",c(s.path)?"text-fc-green bg-fc-green/10":"text-gray-700 hover:text-fc-green hover:bg-fc-green/5"),onClick:()=>n(!1),children:s.name},s.path))})})]})},M=()=>e.jsx("footer",{className:"bg-fc-green text-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"ФК ГУДАУТА"}),e.jsx("p",{className:"text-white/80 mb-4",children:"Футбольный клуб с богатой историей и традициями, стремящийся к новым победам и достижениям."}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("a",{href:"#",className:"text-white hover:text-fc-yellow transition-colors duration-300",children:e.jsx(p,{size:20})}),e.jsx("a",{href:"#",className:"text-white hover:text-fc-yellow transition-colors duration-300",children:e.jsx(u,{size:20})}),e.jsx("a",{href:"#",className:"text-white hover:text-fc-yellow transition-colors duration-300",children:e.jsx(f,{size:20})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Страницы"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx(t,{to:"/",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Главная"})}),e.jsx("li",{children:e.jsx(t,{to:"/team",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Команда"})}),e.jsx("li",{children:e.jsx(t,{to:"/news",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Новости"})}),e.jsx("li",{children:e.jsx(t,{to:"/matches",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Матчи"})}),e.jsx("li",{children:e.jsx(t,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Соревнования"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Соревнования"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx(t,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"3 Лига ПФЛ"})}),e.jsx("li",{children:e.jsx(t,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Кубок России"})}),e.jsx("li",{children:e.jsx(t,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Чемпионат Абхазии"})}),e.jsx("li",{children:e.jsx(t,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Кубок победы"})}),e.jsx("li",{children:e.jsx(t,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Кубок Абхазии"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Контакты"}),e.jsxs("ul",{className:"space-y-4",children:[e.jsxs("li",{className:"flex items-start space-x-3",children:[e.jsx(w,{size:20,className:"shrink-0 mt-1"}),e.jsx("span",{className:"text-white/80",children:"Гудаута, ул. Спортивная, 20"})]}),e.jsxs("li",{className:"flex items-center space-x-3",children:[e.jsx(N,{size:20,className:"shrink-0"}),e.jsx("span",{className:"text-white/80",children:"+7 (940) 123-45-67"})]}),e.jsxs("li",{className:"flex items-center space-x-3",children:[e.jsx(v,{size:20,className:"shrink-0"}),e.jsx("span",{className:"text-white/80",children:"info@fcgudauta.com"})]})]})]})]}),e.jsxs("div",{className:"border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center",children:[e.jsxs("p",{className:"text-white/80",children:["© ",new Date().getFullYear()," ФК Гудаута. Все права защищены."]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsxs("ul",{className:"flex space-x-6",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Политика конфиденциальности"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Условия использования"})})]})})]})]})});export{M as F,z as N};
