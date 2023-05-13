// Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
    en: {
        common: {
            name: "Sergey Sidorov",
            phone_number: '+7 916 4857574',
            website: 'https://pmi.moscow',
            email: 'sergey.sidorov@pmi.moscow',
            age: '34',
        },
        menu: {
            home: 'Home',
            about: 'About',
            talents: 'Talents',
            resume: 'Resume',
            services: 'Services',
            contacts: 'Contact',
        },
        hero: {
            name: 'Sergey Sidorov',
            me: 'I\'m ',
            project: 'Project manager',
            product: 'Product manager',
            analyst: 'System Analyst',
            developer: 'Developer',
        },
        about: {
            title: 'About',
            description: '',
            description: 'My name is Sergey Sidorov and I am an expert in project management, product development, systems analysis and scope management.',
            profession: 'Project manager & Full stack developer',
            profession_desccription: 'The project manager is the person appointed by the performing organization to lead the project team and is responsible for achieving the project objectives and satisfying the requirements of the project\'s key stakeholders. Project managers perform a variety of functions, such as facilitating the work of the team to help them achieve the end results, and managing processes to deliver the intended end results.',
            birthday_titie: 'Birthday:',
            birthday_date: '2 Jul 1988',
            website_title: 'Website:',
            phone_title: 'Phone:',
            city_title: 'City:',
            city: 'Moscow, Russia',
            age_title: 'Age:',
            degree_title: 'Degree:',
            degree: 'Master',
            email_title: 'Email:',
            talents: 'I have classic project management talents and rich experience in scope management in developing unique products under conditions of high uncertainty and finiteness.'
        },
        talents: {
            title: 'Talents',
            description: 'Talented specialist is talented in everything!',
            subtitle: 'My talent triangle',
            project_title: 'A project is a collective activity of a group of people aimed at creating a unique product, service or result, which has the characteristics of high uncertainty and finiteness.',
            talents_description: 'I have classic project management talents and rich management experience.',
            talents_title: 'My Key Talents',
            talents_subtitle: 'I have practical experience of participating in projects with various life cycles',
            hybrid_title: 'Hybrid project lifecycle',
            agile_title: 'Scrum, KANBAN, SAFe, Lean',
            talents_footer: 'I have key skills in applying various approaches and methods to project or product management. In practice, I apply the methods of planning and controlling the implementation of the project.',
            project_managment: 'Project managment',
            schedule_managment: 'Schedule managment',
            methodology: 'Methodology',
            agile_methodology: 'Agile methodology',
            scope_managment: 'Scope methodology',
            hardskills_title: 'Ways of Working (Technical Project Managment)',
            softskills_title: 'Power Skills (Leadership)',
            communication_skills: 'I have strong interpersonal skills',
            communication_skill_1: 'Emotional intellect',
            communication_skill_2: 'Empathy',
            communication_skill_3: 'Motivation',
            communication_skill_4: 'Formal and informal team leadership',
            businessskills_title: 'Business Acumen (Strategic and Business Management)',
            businessskills_description: 'Certified professional who is an agent of top management. I understand and realize the mission, business, goals, market, competitors of the company where I work at the moment. The person who will understand the nuances of your task.',
        },
        services: {
            title: 'MY PET SERVICES',
            description: 'I develop pet projects for myself',
            pmi_club_title: 'PMI Club',
            pmi_club_description: 'The club is a community of people and for people. We combine, accumulate and cherish the personal experience of everyone.',
            docker_mailserver_title: 'Docker mailserver',
            docker_mailserver_description: 'Docker Mailserver is a fork of Jeboehm Docker Mailserver project. Docker Mailserver is great project to server producttion mail server on your host! It\'s based on the famous ISPMail guide and all images based on Alpine Linux.',
            vue_resume_title: 'Vue Resume',
            vue_resume_description: 'Build fast 🚀 and easy beautiful personal site with CV!',
            pytfsclient_title: 'PyTfsClient',
            pytfsclient_description: 'Microsoft Team Foundation Server Python Library is a Microsoft TFS API Python client that can work with Microsoft TFS.',
            nettfsclient_title: 'NetTfsClient',
            nettfsclient_description: 'Microsoft Team Foundation Server .Net Library is a client for Azure service. It can manage workitems, projects and team members.',
        },
        contacts: {
            title: 'Contacts',
            location_title: 'Location 📍:',
            location: 'Moscow, Russia ❤️',
            email_title: 'Email 📧:',
            phone_title: 'Phone 📱:',
            website_title: 'Website 🌐:',
        },
    },
    ru: {
        common: {
            name: "Сергей Сидоров",
            phone_number: '+7-916-4857574',
            website: 'https://pmi.moscow',
            email: 'sergey.sidorov@pmi.moscow',
            age: '34',
        },
        menu: {
            name: "Сергей Сидоров",
            home: 'Главная',
            about: 'Обо мне',
            talents: 'Таланты',
            resume: 'Резюме',
            services: 'Проекты',
            contacts: 'Контакты',
        },
        hero: {
            name: 'Сергей Сидоров',
            me: 'Я - ',
            project: 'Руководитель проектов',
            product: 'Менеджер продукта',
            analyst: 'Системный аналитик',
            developer: 'Разработчик',
        },
        about: {
            title: 'Обо мне',
            description: 'Меня зовут Сергей Сидоров, и я являюсь экспертом в области управления проектами, разработке продуктов, системном анализе и управлении содержанием работ.',
            profession: 'Руководитель проектами & Разработчик',
            profession_desccription: 'Руководитель проекта - лицо, назначенное исполняющей организацией, руководить командой проекта и отвечающее за достижение целей проекта и удовлетворение требований ключевых заинтересованных сторон проекта. Руководители проектов выполняют разнообразные функции, такие, как фасилитация работы команды, которая поможет ей достичь конечных результатов, и управление процессами для поставки намеченных конечных результатов.',
            birthday_titie: 'День рождения:',
            birthday_date: '02.07.1988',
            website_title: 'Сайт:',
            phone_title: 'Телефон:',
            city_title: 'Город:',
            city: 'Москва, Россия',
            age_title: 'Возраст:',
            degree_title: 'Образование:',
            degree: 'Высшее, специалист',
            email_title: 'Почта:',
            talents: 'Обладаю классическими талантами руководителя проектами и богатым опытом в области управления содержанием работ при разработке уникальных продуктов в условиях сильной неопределенности и конечности.'
        },
        talents: {
            title: 'Таланты',
            description: 'Талантливый специалист - талантлив во всем!',
            subtitle: 'Мой треугольник талантов',
            project_title: 'Проект - совокупная деятельность группы людей, направленная на создание уникального продукта, услуги или результата, обладающая характеристиками высокой неопределенности и конечности.',
            talents_description: 'Обладаю классическими талантами руководителя проектами и богатым опытом в области управления содержанием работ при разработке уникальных продуктов в условиях сильной неопределенности и конечности.',
            talents_title: 'Мои ключевые таланты',
            talents_subtitle: 'Имею практический опыт участия в проектах с различными жизненными циклами',
            hybrid_title: 'Проектный подход с ограничения по содержанию, срокам и стоимости',
            agile_title: 'Scrum, KANBAN, SAFe, Lean',
            talents_footer: 'Обладаю ключевыми навыками в применении различных подходов и методов к управлению проектами или продуктами. На практике применяю методы планирования и контролирования выполнение проекта.',
            project_managment: 'Управление проектом',
            schedule_managment: 'Управление расписанием',
            methodology: 'Методология',
            agile_methodology: 'Гибкая методология',
            scope_managment: 'Управление содержанием',
            hardskills_title: 'Ways of Working (Technical Project Managment, ключевые навыки)',
            softskills_title: 'Power Skills (Leadership, формальное и неформальное лидерство)',
            communication_skills: 'Обладаю развитыми навыками межличностного общения и работы с людьми',
            communication_skill_1: 'Эмоциональный интеллект',
            communication_skill_2: 'Эмпатия',
            communication_skill_3: 'Мотивация',
            communication_skill_4: 'Формальное и неформальное лидерство в команде',
            businessskills_title: 'Business Acumen (Strategic and Business Management, понимание потребности бизнеса)',
            businessskills_description: 'Сертифицированный профессионал, который является агентом топ-менеджмента. Понимаю и осознаю миссию, бизнес, цели, рынок, конкурентов компании, где работаю в текущий момент. Тот человек, который будет разбираться в нюансах вашей задачи.',
        },
        services: {
            title: 'МОИ ДОМАШНИЕ ПРОЕКТЫ',
            description: 'Разрабатываю проекты для души',
            pmi_club_title: 'PMI Club',
            pmi_club_description: 'Клуб — это коммьюнити людей и для людей. Мы объединяем, аккумулируем и бережем личный опыт каждого.',
            docker_mailserver_title: 'Почтовый сервер (Docker)',
            docker_mailserver_description: 'Docker Mailserver — это форк проекта Jeboehm Docker Mailserver. Отличный проект для создания почтового сервера на вашем хосте!',
            vue_resume_title: 'Vue Resume',
            vue_resume_description: 'Создайте свой персональный сайт с отличным резюме 🚀',
            pytfsclient_title: 'PyTfsClient',
            pytfsclient_description: 'Python библиотека для взаимодействия с Azure/TFS сервисом',
            nettfsclient_title: 'NetTfsClient',
            nettfsclient_description: '.Net (Core) клиент для взаимодейтсвия с Azure/TFS сервисом',
        },
        contacts: {
            title: 'Контакты',
            location_title: 'Адрес 📍:',
            location: 'г. Москва, Россия ❤️',
            email_title: 'Почта 📧:',
            phone_title: 'Телефон 📱:',
            website_title: 'Сайт 🌐:',
        },
    },
};

export default messages;