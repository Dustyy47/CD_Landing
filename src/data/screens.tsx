export const screensData = {
  main: {
    title: 'Hey, I’m Nick',
    subtitle: 'Frontend developer',
    article: (
      <>
        Help you to create high-quality digital products that your clients will
        love and let your business thrive
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
}
