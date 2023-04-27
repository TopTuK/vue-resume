// Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
    en: {
        common: {
            phone_number: '+7 916 4857574',
            website: 'https://pmi.moscow',
            email: 'sergey.sidorov@pmi.moscow',
            age: '34',
        },
        menu: {
            home: 'Home',
            about: 'About',
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
            talants: 'I have classic project management talents and rich experience in scope management in developing unique products under conditions of high uncertainty and finiteness.'
        },
    },
    ru: {
        menu: {
            home: 'Главная',
            about: 'Обо мне',
            resume: 'Резюме',
            services: 'Проекты',
            contacts: 'Контакты',
        },
        hero: {
            name: 'Сергей Сидоров',
            me: 'Я - ',
            project: 'Руководитель проектами',
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
            talants: 'Обладаю классическими талантами руководителя проектами и богатым опытом в области управления содержанием работ при разработке уникальных продуктов в условиях сильной неопределенности и конечности.'
        },
    },
};

export default messages;