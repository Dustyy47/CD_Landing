import { Language } from '../App'

export const screensData: Record<Language, any> = {
  eng: {
    main: {
      title: 'Hey, I’m Nick',
      subtitle: 'Frontend developer',
      article: (
        <>
          Help you to create high-quality digital products that your clients
          will love and let your business thrive
        </>
      ),
      buttonText: 'Get in touch'
    },
    aboutMe: {
      title: 'About me',
      article: (
        <>
          <b className='text-black'>Nick Richardson</b> - specialist in Frontend
          development. Clear code is my passion. Solving issues through
          negotiations
        </>
      ),
      buttonText: 'Get in touch',
      interests: [
        {
          iconSrc: './images/Music.svg',
          title: 'Music',
          subtitle: 'Indie rock | Reggae'
        },
        {
          iconSrc: './images/Art.svg',
          title: 'Art',
          subtitle: 'Edvard Munch | Frida Kahlo'
        },
        {
          iconSrc: './images/Photography.svg',
          title: 'Photography',
          subtitle: 'Portraits'
        }
      ],
      story: [
        {
          start: '2008',
          end: 'Present',
          title: 'Middle Frontend developer',
          subtitle: 'Ozon'
        },
        {
          start: '2006',
          end: '2007',
          title: 'Frontend development courses',
          subtitle: 'Stepik'
        },
        {
          start: '2000',
          end: '2005',
          title: 'Frontend developer',
          subtitle: 'Saint Petersburg State University'
        }
      ]
    },
    discuss: {
      title: 'Let’s discuss your project',
      buttonText: 'Submit',
      fullnameLabel: 'Your fullname',
      emailLabel: 'Your email',
      textareaLabel: 'Tell me about your project',
      fullnamePlaceholder: 'Name Surname',
      emailPlaceholder: 'name@example.com',
      textAreaPlaceholder:
        'Add here a general description of your idea and target aim'
    }
  },
  ru: {
    main: {
      title: 'Привет, я Ник!',
      subtitle: 'Frontend разработчик',
      article: (
        <>
          Помогу вам создавать высококачественные цифровые продукты, которые
          понравятся вашим клиентам и позволят вашему бизнесу процветать.
        </>
      ),
      buttonText: 'Связаться со мной'
    },
    aboutMe: {
      title: 'Обо мне',
      article: (
        <>
          <b className='text-black'>Ник Ричардсон</b> - специалист в разработке
          Frontend. Чистый код - моя страсть. Решение проблем через переговоры.
        </>
      ),
      buttonText: 'Связаться со мной',
      interests: [
        {
          iconSrc: './images/Music.svg',
          title: 'Музыка',
          subtitle: 'Инди-рок | Регги'
        },
        {
          iconSrc: './images/Art.svg',
          title: 'Искусство',
          subtitle: 'Эдвард Мунк | Фрида Кало'
        },
        {
          iconSrc: './images/Photography.svg',
          title: 'Фотография',
          subtitle: 'Портреты'
        }
      ],
      story: [
        {
          start: '2008',
          end: 'настоящее время',
          title: 'Middle Frontend developer',
          subtitle: 'Ozon'
        },
        {
          start: '2006',
          end: '2007',
          title: 'Курсы Frontend разработки',
          subtitle: 'Stepik'
        },
        {
          start: '2000',
          end: '2005',
          title: 'Frontend разработчик',
          subtitle: 'Санкт-Петербургский государственный университет'
        }
      ]
    },
    discuss: {
      title: 'Давайте обсудим ваш проект',
      buttonText: 'Отправить',
      fullnameLabel: 'Ваше имя и фамилия',
      emailLabel: 'Ваш email',
      textareaLabel: 'Расскажите мне о вашем проекте',
      fullnamePlaceholder: 'Имя Фамилия',
      emailPlaceholder: 'name@example.com',
      textAreaPlaceholder: 'Добавьте общее описание вашей идеи и цели'
    }
  }
}
