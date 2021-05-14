import { Component } from "@angular/core";

@Component({
    selector: 'about-qr-page',
    templateUrl: './about_qr_page.html',
    styleUrls: ['./about_qr_page.scss'],
})
export class AboutQrPage {
    readonly description =
        `This is a tattoo of a QR code that links to [REDACTED]. I 'own' this domain, and have it
        pointed at a page on my personal website - blakewilliams.org - which is hosted on GitHub
        Pages. Unlike a vast majority of QR codes that will direct you to some fixed URL, this
        code is 'dynamic'. This means that I have the ability to change it's functionality as I
        please. I do this with a custom android app that I wrote; on my phone I select from a
        pre-set list of abilities I've written code for, then behind the scenes I call Github's
        REST API to commit the changes to a JSON file stored on GitHub. The QR code landing page
        reads the config file and then determines what info to show or where to redirect users to
        from there.`;


    readonly faqs: QuestionAndAnswer[] = [
        {
            question: 'There are a bunch of websites that offer \'dynamic\' QR codes, how is this different?',
            answer: `Technically it's not; it's the same core offering you may see from sites like Scanova,
            but the key here is that I control the whole process. I don't have to wonder if Scanova or equivalent
            will be around in X decades from now. I have the domain and can build/link to my web projects
            as I please.`,
        },
        {
            question: 'What if you loose the domain?',
            answer: `While nobody (not even large companies) can outright own a domain
            indefinitely, you can lease them for up to 10 years at a time from ICANN.
            Mine is good till at least 2030, and I have auto-renew payment set up so
            I don\'t expect lapses in URL ownership.`,
        },
        {
            question: 'What if GitHub stops support for their API?',
            answer: `Then I\'ll just keep the config elsewhere on the internet that
            does allow for APIs to modify repos.`,
        },
        {
            question: 'What if the tattoo blurs or fades?',
            answer: `I'm purposefully getting the tattoo slightly under-inked to anticipate
            this. <a href="https://i.imgur.com/JY7AY3n.jpeg" target="_blank">Here is an example
            of a tattoo from someone else that still works but is showing ink bleeding</a>.
            Also if the fade still gets too bad several decades down the road, laser removal
            can re-sharpen the edges.`,
        },
        {
            question: 'What if it stops working one day?',
            answer: '<a href="https://example.com">Click me</a>',
        },
    ]

    // Tom Scott's API video embed:
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/BxV14h0kFs0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}

export interface QuestionAndAnswer {
    question: string;
    answer: string;
}