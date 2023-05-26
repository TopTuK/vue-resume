// Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
    en: {
        common: {
            name: "Sergey Sidorov",
            phone_number: '+7 916 4857574',
            website: 'https://pmi.moscow',
            email: "sergey.sidorov{'@'}pmi.moscow",
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
        volunteer: {
            section_title: 'volunteer activity',
            volunteer1: 'С июля 2022 года являюсь членом Института проектного управления PMI (https://pmi.org).',
            volunteer2: 'В ноябре 2021 года присоединился к команде волонтеров Московского отделения PMI.',
            volunteer3: 'Прошел школу президентов локальных отделений PMI. Номинирован на позицию Вице-президента по коммуникациям.',
            volunteer4: 'Для сохранения сообщества руководитлей проектов, накопления и приомножения опыта, совместно с волонтерами Московского отделения PMI создал, развиваю и популяризую PMI Russia Club (участие в Клубе бесплатное - присоединяйтесь, тут недушно можно обсудить насущные вопросы вдали от большого Интернета)',
            volunteer5: 'В сентябре 2022 года создал блог для популяризации профессий руководителя проектов, проектных инженеров, системных аналитиков и других членов проектных и продуктовых команд.'
        },
        hobby: {
            section_title: 'Мои увлечения',
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
        resume: {
            work_title: 'Project Manager',
            download_pdf: 'Download PDF',
            linkedin_web: 'https://www.linkedin.com/in/pmsergey/',
            github_web: 'https://github.com/toptuk',
            personal_web: 'https://s-sidorov.ru',
            career_summary: 'career summary',
            career_summary_text: 'Change. One word that would describe my background. Every organisation that wnats to move forward had needed to change and adapt to an evolving environment. Wouldn\'t you like to have someone on your team tah has experience in all phases of change? From initiating, planning, execution, monitoring and closure of a project, to the skilsets required to adapt the communication to different disciplines and skills, I have been fortunate enough to do it. I have enjoyed doing to so much, that I even sought out and completed Mssters Certification to further expand my toolbox.',
            work_experience: 'Work Experience',
            achievements_title: 'Achievements:',
            tags_title: 'Tags:',
            skills_title: 'Skills',
            education_title: 'education',
            certificates_title: 'Certificates',
            language_title: 'LANGUAGE',
            interests_title: 'Interests',
            footer_title: 'Additional',
            footer_dscription: 'Активно равзвиваю персональный блог (https://blog.s-sidorov.ru), сообщество проектных руководителей и членов продуктовых команд (https://pmi.moscow). Разрабатываю домашние проекты в Github (https://github.com/toptuk): реализовал различные библиотеки, утилиты, приложения и сайты с использование .net, C#, Python, Django, Flutter, Dart, Docker, Postgres, Redis, nginx. Изучаю различные способы разработки нейронных сетей и прогнозирующих моделей - алгоритм NEAT, ChatGPT, сверточные сети и др. Люблю путешествовать и публично выступать. Увлекаюсь игрой на бас гитаре в составе группы KAVёr и активными зимними видами спорта - катаюсь на горных лыжах.',
        },
        jobs: {
            analyst_group_manager: 'System Analyst Group Manager',
            kaspersky: 'Kaspersky Lab',
            current_period: '03.2020 - Present',
            analyst_group_manager_description: 'АО Лаборатория Касперского - ведущая международная компания, работающая в сфере информационной безопасности и цифровой приватности с 1997 года. Технологии «Лаборатории Касперского» защищают более 400 миллионов пользователей и 220 тысяч корпоративных клиентов во всём мире. Являюсь участником проектов по выпуску флагманских продуктов компании для B2C и B2B пользователей.',
            analyst_group_manager_achievements: 'В качестве руководителя группы системных аналитиков принимаю активное участие на этапах планирования, исполнения и контроля разработки флагманских продуктов для ОС Windows таких, как Internet Security, Endpoint Security, Security Connection, Password Manager, Safe Kids и других. Команда аналитиков состоит из 10-14 высококвалифицированных аналитиков, обеспечивающих постоянные релизы продуктов. Суммарное количество проектной команды и заинтересованных сторон - более 150 человек.',
            analyst_group_manager_achievement1: 'Обеспечиваю планирования, реализацию и контроль содержания работ для релизов продуктов. Итерационная разработка, 3 релиза в год.',
            analyst_group_manager_achievement2: 'Являюсь руководителем команды аналитиков в проекте по разработке 10 различных продуктов для B2C и B2B. Команда состоит из 10-14 системных аналитиков: контроль, развитие и мотивация сотрудников.',
            analyst_group_manager_achievement3: 'Внедрил процессы мотивации и развития сотрудников. Провожу факультативные занятия по обучению новым практикам и методам разработки продуктов и провожу регулярные 1-1 встречи.',
            analyst_group_manager_achievement4: 'Внедрил процесс найма и обучения новых сотрудников. Время поиска новых высококвалифицированных сотрудников сократилось до 1.5 месяца.',
            analyst_group_manager_achievement5: 'Стандартизовал процесс управления требованиями. Внедрил процесс определения и подтверждения концепции реализации требований за счет которого количество отклоненных требований сократилось на порядок.',
            analyst_group_manager_achievement6: 'Разработал и внедрил IT систему планирования, контроля и автоматизации выполнения аналитических активностей для релизов продукта. Обработка некоторых ежерелизных активностей стала детерминированной операционной деятельностью.',
            analyst_group_manager_tag1: 'Управление командой',
            analyst_group_manager_tag2: 'Развитие сотрудников',
            analyst_group_manager_tag3: 'Лидерство',
            analyst_group_manager_tag4: 'Управление заинтересованными лицами',
            analyst_group_manager_tag5: 'Управление проектом',

            analyst_team_lead: 'System Analyst Team Lead',
            analyst_team_lead_period: '05.2017 - 03.2022',
            analyst_team_lead_description: 'В качестве руководителя команды Системных аналитиков работал в проекте по выпуску флагманских продуктов компании для B2C и B2B пользователей. Обеспечивал поддержку выпуска релизов продуктов на всех этапах, начиная от инициации, заканчивая выпуском технического релиза и пострелизных активностей.',
            analyst_team_lead_achievements: 'Выполнял роль руководителя группы системных аналитиков в проектах по выпуску продуктов для ОС Windows. Осуществлял планирование и контроль выполнения аналитических активностей для выпуска продуктов',
            analyst_team_lead_achievement1: 'Активно участвовал в процессе формирования скоупа бизнес-требований. Проект обеспечивает выпуск более 7 продуктов для B2C и B2B. Обеспечивал выявление требований на всех уровнях: бизнес-требования, пользовательские сценарии, системные требования.',
            analyst_team_lead_achievement2: 'Осуществлял постановку задач, контроль сроков и качества исполнения задач. Управление ожиданиями заказчиков по реализации.',
            analyst_team_lead_achievement3: 'Обеспечиваю декомпозицию требований на задачи в разработку и тестирование в Microsoft TFS.',
            analyst_team_lead_achievement4: 'Создал и поддерживаю проектную базу знаний с описанием процессов выпуска релиза продуктов.',
            analyst_team_lead_achievement5: 'Реализовал Python и .net библиотеку для взаимодействия с Azure сервисами. Это позволило легко разрабатывать утилиты для автоматизации аналитических активностей проекта.',
            analyst_team_lead_achievement6: 'Участвовал в процессе внедрения Scaled Agile Framework для управления программой проектов.',
            analyst_team_lead_tag1: 'Управление требованиями',
            analyst_team_lead_tag2: 'Проектрование',
            analyst_team_lead_tag3: 'Python',
            analyst_team_lead_tag4: '.net',
            analyst_team_lead_tag5: 'Архитектура ПО',

            senior_analyst: 'Senior System Analyst',
            senior_analyst_period: '10.2014 - 05.2017',
            senior_analyst_description: 'В качестве старшего системного аналитика работал в проекте по выпуску флагманских продуктов для домашних пользователей линейки KIS. Количество пользователей порядка 30млн. Обеспечивал управление содержанием релизов продуктов согласно полученным требованиям бизнес-уровня.',
            senior_analyst_achievements: 'Главное достижение за период работы старшим системным аналитиком - это приобретение экспертных знаний о работе продукта, основных ограничениях, рисков.',
            senior_analyst_achievement1: 'Обеспечивал управление содержанием работ для релизов продуктов линейки Kaspersky Internet Security. Суммарный скоуп - это порядка 150 бизнес-требований.',
            senior_analyst_achievement2: 'Единственный аналитиком в проекте по разработке продукта Kaspersky Fraud Prevention for Endpoints. Основной клиент - самый крупный банк Эквадора. Привлекался к техническим встречам с заказчиками со стороны бизнеса, Pre-sale инженерами и др.',
            senior_analyst_achievement3: 'Получил патент за разработку функции по защите ввода пользовательского ввода с использованием технологии IME.',
            senior_analyst_achievement4: 'Являлся ментором для новых аналитиков в проекте.',
            senior_analyst_tag1: 'UML',
            senior_analyst_tag2: 'Сценарии использования',
            senior_analyst_tag3: 'Системные требования',
            
            system_analyst: 'System Analyst',
            system_analyst_period: '10.2011 - 10.2014',
            system_analyst_description: 'В качестве системного аналитика участвовал в выявлении, анализе, согласовании и поддержке системных требований в технологической группе контентной фильтрации и аналитике продуктов Kaspersky Internet Security.',
            system_analyst_achievements: '',
            system_analyst_achievement1: 'Полностью описал спецификацию области контентной фильтрации.',
            system_analyst_achievement2: 'ровел исследование технологических возможностей плагинов для браузеров. В результате вместе с командой разработали плагины для браузеров Chrome, FireFox, Internet Explorer.',
            system_analyst_achievement3: 'Обеспечивал согласование юридических требований к продукту.',
            system_analyst_tag1: 'Функциональные требованя',
            system_analyst_tag2: 'Нефункциональные требования',
            system_analyst_tag3: 'Сбор требований',

            engineer: 'System engineer',
            russian_sapr: 'Russian SAPR',
            russian_sapr_period: '05.2010 - 06.2011',
            russian_sapr_description: 'Разрабатывал систему автоматизация документооборота для крупных государственных предприятия. На базе PDM Lotsia обеспечивал инициацию, разработку и документирования проекта для РосАтома.',
            russian_sapr_achievements: '',
            russian_sapr_achievement1: 'Обследование предприятия, выявление бизнес-процесса документооборота на всех стадия проектирования.',
            russian_sapr_achievement2: 'Написание технического задания на разработку.',
            russian_sapr_achievement3: 'Реализация автоматизированного документооборота.',
            russian_sapr_tag1: 'LMS',
            russian_sapr_tag2: 'Moodle',
            russian_sapr_tag3: 'PDM Lotsia',

            developer: 'Developer',
            oviont: 'Овионт',
            oviont_period: '06.2008 - 09.2009',
            oviont_description: 'Разрабатывал продукт для бюджетного предприятия Московской области.',
            oviont_achievements: '',
            oviont_achievement1: 'Создал GUI-дизайн системы.',
            oviont_achievement2: 'Разработал компонент для быстрого отображения табличных данных.',
            oviont_achievement3: 'Приобрел навык разработки конечного продукта на языке Delphi (Pascal).',
            oviont_tag1: 'Delphi',
            oviont_tag2: 'Pascal',
        },
        skills: {
            pmi: 'PMI',
            pmp: 'PMP',
            project_managment: 'Hybrid project',
            agile: 'Agile',
            scrum: 'Scrum',
            kanban: 'KANBAN',
            lean: 'Lean',
            analysis: 'System analysis',
            uml: 'UML',
            architecture: 'Architecture',
            csharp: 'C#',
            python: 'Python',
            flutter: 'Flutter',
            dart: 'Dart',
            neural_network: 'Neural network',
            docker: 'Docker',
            kubernetes: 'Kubernetes',
        },
        education: {
            mai_high: 'Higher education, system engineer',
            mai_title: 'Moscow Aviation Institute. Automated control systems',
            mai_period: '2005 - 2010',
        },
        languages: {
            russian: 'Russian (Native)',
            english: 'English (Intermediate)',
        },
        interests: {
            project_managment: 'Project managment',
            product_managment: 'Product managment',
            development: 'Software development',
            system_analysis: 'System analysis',
            neural_networks: 'Neural networks',
            teambuilding: 'Teambuilding',
            bass_guitar: 'Bass guitar',
            ski: 'Skiing',
        },
    },
    ru: {
        common: {
            name: "Сергей Сидоров",
            phone_number: '+7 916 4857574',
            website: 'https://pmi.moscow',
            email: "sergey.sidorov{'@'}pmi.moscow",
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
        volunteer: {
            section_title: 'волонтерская деятельность',
            volunteer1: 'С июля 2022 года являюсь членом Института проектного управления PMI (https://pmi.org).',
            volunteer2: 'В ноябре 2021 года присоединился к команде волонтеров Московского отделения PMI.',
            volunteer3: 'Прошел школу президентов локальных отделений PMI. Номинирован на позицию Вице-президента по коммуникациям.',
            volunteer4: 'Для сохранения сообщества руководитлей проектов, накопления и приомножения опыта, совместно с волонтерами Московского отделения PMI создал, развиваю и популяризую PMI Russia Club (участие в Клубе бесплатное - присоединяйтесь, тут недушно можно обсудить насущные вопросы вдали от большого Интернета)',
            volunteer5: 'В сентябре 2022 года создал блог для популяризации профессий руководителя проектов, проектных инженеров, системных аналитиков и других членов проектных и продуктовых команд.'
        },
        talents: {
            title: 'Таланты',
            description: 'Талантливый человек - талантлив во всем!',
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
        resume: {
            work_title: 'Руководитель проектов',
            download_pdf: 'Скачать PDF',
            linkedin_web: 'https://www.linkedin.com/in/pmsergey/',
            github_web: 'https://github.com/toptuk',
            personal_web: 'https://s-sidorov.ru',
            career_summary: 'описание',
            career_summary_text: '"Триумф" - это одно слово, которое характеризует мое стремление в работе. Это же слово могло бы описать мое прошлое, ведь большая часть моего опыта связана с флагманскими проектами АО Лаборатория Касперского для B2C и B2B пользователей. Вместе с командой высокомотивированных профессионалов я хочу и стремлюсь реализовывать проекты до конца в условиях сильной неопределённости, чтобы все заинтересованные стороны были удовлетворены. Разве вы не хотите, чтобы в вашей команде был тот, кто применит все имеющиеся компетенции на каждом этапе изменений? От инициации, планирования, выполнения, контроля и закрытия проекта до навыков, необходимых для адаптации коммуникации к различным стейкхолдерам. Мне очень нравится устранять неопределенность и энтропию проектов, что я постоянно развиваю и расширяю свои таланты и набор инструментов для работы. Активно развиваю свой персональный блог, сообщество проектных руководителей и домашние проекты.',
            work_experience: 'Стаж работы',
            achievements_title: 'Достижения:',
            tags_title: 'Навыки',
            skills_title: 'Таланты',
            education_title: 'Образование',
            certificates_title: 'Сертификаты',
            language_title: 'языки',
            interests_title: 'Интересы',
            footer_title: 'Дополнительно',
            footer_dscription: 'Являюсь эуспертом в области управления содержания работ. Обладаю знаниями управления требованиями, UML, определения качества продукта. Активно равзвиваю персональный блог (https://blog.s-sidorov.ru), сообщество проектных руководителей и членов продуктовых команд (https://pmi.moscow). Разрабатываю домашние проекты в Github (https://github.com/toptuk): реализовал различные библиотеки, утилиты, приложения и сайты с использование .net, C#, Python, Django, Flutter, Dart, Docker, Postgres, Redis, nginx. Изучаю различные способы разработки нейронных сетей и прогнозирующих моделей - алгоритм NEAT, ChatGPT, сверточные сети и др. Люблю путешествовать и публично выступать. Увлекаюсь игрой на бас гитаре в составе группы KAVёr и активными зимними видами спорта - катаюсь на горных лыжах.',
        },
        jobs: {
            analyst_group_manager: 'Руководитель группы системного анализа',
            kaspersky: 'АО Лаборатория Касперского',
            current_period: '03.2020 - Настоящее время',
            analyst_group_manager_description: 'АО Лаборатория Касперского - ведущая международная компания, работающая в сфере информационной безопасности и цифровой приватности с 1997 года. Технологии «Лаборатории Касперского» защищают более 400 миллионов пользователей и 220 тысяч корпоративных клиентов во всём мире. Являюсь участником проектов по выпуску флагманских продуктов компании для B2C и B2B пользователей.',
            analyst_group_manager_achievements: 'В качестве руководителя группы системных аналитиков принимаю активное участие на этапах планирования, исполнения и контроля разработки флагманских продуктов для ОС Windows таких, как Internet Security, Endpoint Security, Security Connection, Password Manager, Safe Kids и других. Команда аналитиков состоит из 10-14 высококвалифицированных аналитиков, обеспечивающих постоянные релизы продуктов. Суммарное количество проектной команды и заинтересованных сторон - более 150 человек.',
            analyst_group_manager_achievement1: 'Обеспечиваю планирования, реализацию и контроль содержания работ для релизов продуктов. Итерационная разработка, 3 релиза в год.',
            analyst_group_manager_achievement2: 'Являюсь руководителем команды аналитиков в проекте по разработке 10 различных продуктов для B2C и B2B. Команда состоит из 10-14 системных аналитиков: контроль, развитие и мотивация сотрудников.',
            analyst_group_manager_achievement3: 'Внедрил процессы мотивации и развития сотрудников. Провожу факультативные занятия по обучению новым практикам и методам разработки продуктов и провожу регулярные 1-1 встречи.',
            analyst_group_manager_achievement4: 'Внедрил процесс найма и обучения новых сотрудников. Время поиска новых высококвалифицированных сотрудников сократилось до 1.5 месяца.',
            analyst_group_manager_achievement5: 'Стандартизовал процесс управления требованиями. Внедрил процесс определения и подтверждения концепции реализации требований за счет которого количество отклоненных требований сократилось на порядок.',
            analyst_group_manager_achievement6: 'Разработал и внедрил IT систему планирования, контроля и автоматизации выполнения аналитических активностей для релизов продукта. Обработка некоторых ежерелизных активностей стала детерминированной операционной деятельностью.',
            analyst_group_manager_tag1: 'Управление командой',
            analyst_group_manager_tag2: 'Развитие сотрудников',
            analyst_group_manager_tag3: 'Лидерство',
            analyst_group_manager_tag4: 'Управление заинтересованными лицами',
            analyst_group_manager_tag5: 'Управление проектом',

            analyst_team_lead: 'Ведующий аналитик',
            analyst_team_lead_period: '05.2017 - 03.2022',
            analyst_team_lead_description: 'В качестве руководителя команды Системных аналитиков работал в проекте по выпуску флагманских продуктов компании для B2C и B2B пользователей. Обеспечивал поддержку выпуска релизов продуктов на всех этапах, начиная от инициации, заканчивая выпуском технического релиза и пострелизных активностей.',
            analyst_team_lead_achievements: 'Выполнял роль руководителя группы системных аналитиков в проектах по выпуску продуктов для ОС Windows. Осуществлял планирование и контроль выполнения аналитических активностей для выпуска продуктов',
            analyst_team_lead_achievement1: 'Активно участвовал в процессе формирования скоупа бизнес-требований. Проект обеспечивает выпуск более 7 продуктов для B2C и B2B. Обеспечивал выявление требований на всех уровнях: бизнес-требования, пользовательские сценарии, системные требования.',
            analyst_team_lead_achievement2: 'Осуществлял постановку задач, контроль сроков и качества исполнения задач. Управление ожиданиями заказчиков по реализации.',
            analyst_team_lead_achievement3: 'Обеспечиваю декомпозицию требований на задачи в разработку и тестирование в Microsoft TFS.',
            analyst_team_lead_achievement4: 'Создал и поддерживаю проектную базу знаний с описанием процессов выпуска релиза продуктов.',
            analyst_team_lead_achievement5: 'Реализовал Python и .net библиотеку для взаимодействия с Azure сервисами. Это позволило легко разрабатывать утилиты для автоматизации аналитических активностей проекта.',
            analyst_team_lead_achievement6: 'Участвовал в процессе внедрения Scaled Agile Framework для управления программой проектов.',
            analyst_team_lead_tag1: 'Управление требованиями',
            analyst_team_lead_tag2: 'Проектрование',
            analyst_team_lead_tag3: 'Python',
            analyst_team_lead_tag4: '.net',
            analyst_team_lead_tag5: 'Архитектура ПО',
            
            senior_analyst: 'Старший системный аналитик',
            senior_analyst_period: '10.2014 - 05.2017',
            senior_analyst_description: 'В качестве старшего системного аналитика работал в проекте по выпуску флагманских продуктов для домашних пользователей линейки KIS. Количество пользователей порядка 30млн. Обеспечивал управление содержанием релизов продуктов согласно полученным требованиям бизнес-уровня.',
            senior_analyst_achievements: 'Главное достижение за период работы старшим системным аналитиком - это приобретение экспертных знаний о работе продукта, основных ограничениях, рисков.',
            senior_analyst_achievement1: 'Обеспечивал управление содержанием работ для релизов продуктов линейки Kaspersky Internet Security. Суммарный скоуп - это порядка 150 бизнес-требований.',
            senior_analyst_achievement2: 'Единственный аналитиком в проекте по разработке продукта Kaspersky Fraud Prevention for Endpoints. Основной клиент - самый крупный банк Эквадора. Привлекался к техническим встречам с заказчиками со стороны бизнеса, Pre-sale инженерами и др.',
            senior_analyst_achievement3: 'Получил патент за разработку функции по защите ввода пользовательского ввода с использованием технологии IME.',
            senior_analyst_achievement4: 'Являлся ментором для новых аналитиков в проекте.',
            senior_analyst_tag1: 'UML',
            senior_analyst_tag2: 'Сценарии использования',
            senior_analyst_tag3: 'Системные требования',

            system_analyst: 'Системный аналитик',
            system_analyst_period: '10.2011 - 10.2014',
            system_analyst_description: 'В качестве системного аналитика участвовал в выявлении, анализе, согласовании и поддержке системных требований в технологической группе контентной фильтрации и аналитике продуктов Kaspersky Internet Security.',
            system_analyst_achievements: '',
            system_analyst_achievement1: 'Полностью описал спецификацию области контентной фильтрации.',
            system_analyst_achievement2: 'ровел исследование технологических возможностей плагинов для браузеров. В результате вместе с командой разработали плагины для браузеров Chrome, FireFox, Internet Explorer.',
            system_analyst_achievement3: 'Обеспечивал согласование юридических требований к продукту.',
            system_analyst_tag1: 'Функциональные требованя',
            system_analyst_tag2: 'Нефункциональные требования',
            system_analyst_tag3: 'Сбор требований',

            engineer: 'Инженер',
            russian_sapr: 'Русский САПР',
            russian_sapr_period: '05.2010 - 06.2011',
            russian_sapr_description: 'Разрабатывал систему автоматизация документооборота для крупных государственных предприятия. На базе PDM Lotsia обеспечивал инициацию, разработку и документирования проекта для РосАтома.',
            russian_sapr_achievements: '',
            russian_sapr_achievement1: 'Обследование предприятия, выявление бизнес-процесса документооборота на всех стадия проектирования.',
            russian_sapr_achievement2: 'Написание технического задания на разработку.',
            russian_sapr_achievement3: 'Реализация автоматизированного документооборота.',
            russian_sapr_tag1: 'LMS',
            russian_sapr_tag2: 'Moodle',
            russian_sapr_tag3: 'PDM Lotsia',

            developer: 'Разработчик',
            oviont: 'Овионт',
            oviont_period: '06.2008 - 09.2009',
            oviont_description: 'Разрабатывал продукт для бюджетного предприятия Московской области.',
            oviont_achievements: '',
            oviont_achievement1: 'Создал GUI-дизайн системы.',
            oviont_achievement2: 'Разработал компонент для быстрого отображения табличных данных.',
            oviont_achievement3: 'Приобрел навык разработки конечного продукта на языке Delphi (Pascal).',
            oviont_tag1: 'Delphi',
            oviont_tag2: 'Pascal',
        },
        skills: {
            pmi: 'PMI',
            pmp: 'PMP',
            project_managment: 'Проектный подход',
            agile: 'Agile',
            scrum: 'Scrum',
            kanban: 'KANBAN',
            lean: 'Lean',
            analysis: 'Системный анализ',
            uml: 'UML',
            architecture: 'Архитектура',
            csharp: 'C#',
            python: 'Python',
            flutter: 'Flutter',
            dart: 'Dart',
            neural_network: 'Нейронные сети',
            docker: 'Docker',
            kubernetes: 'Kubernetes',
        },
        education: {
            mai_high: 'Высшее, инженер-системотехник',
            mai_title: 'Московский Авиационный Институт. Автоматизированные системы управления',
            mai_period: '2005 - 2010',
        },
        languages: {
            russian: 'Русский (Родной)',
            english: 'Английский (Intermediate)',
        },
        interests: {
            project_managment: 'Проектное управление',
            product_managment: 'Продуктовый менеджмент',
            development: 'Разработка ПО',
            system_analysis: 'Системный анализ',
            neural_networks: 'Нейронные сети',
            teambuilding: 'Командообразование',
            bass_guitar: 'Бас гитара',
            ski: 'Горные лыжи',
        },
    },
};

export default messages;