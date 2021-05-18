import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'about-qr-page',
    templateUrl: './about_qr_page.html',
    styleUrls: ['./about_qr_page.scss'],
})
export class AboutQrPage {
    public constructor(private titleService: Title) {
      this.titleService.setTitle("About QR Tattoo");
    }

    readonly description =
        `This is a tattoo of a QR code that links to qrtatt.ooo. I 'own' this domain, and have it
        pointed at a reserved landing page on my personal website - blakewilliams.org - which is
        hosted on GitHub Pages. Unlike a vast majority of QR codes that will direct you to some
        fixed URL, this code is 'dynamic'. This means that I can change it's functionality as I
        please. I created a custom android app that for this! On my phone I select from a pre-set
        list of abilities I've written accounted for, then behind the scenes I call Github's
        REST API to commit the changes to a JSON file stored on GitHub. For example, the landing
        page can redirect to any other URL of my choosing, prompt a download for a VCF contact file,
        open a chat with me on whatsapp/telegram/twitter/etc... and many more. The QR code landing
        page reads the config file and then determines what info to show or where to redirect users
        to from there.`;


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
            question: 'Why not just have a business card or keychain of it? Why does it need to be a tattoo?',
            answer: `Right, it doesn't need to be a tattoo. Nothing in this project is wholly new or
            innovative; I recognize that it's about as much effort for a user to scan my arm as it
            is to just give the info verbally or by typing it into their phone. It's just more novel.`,
        },
        {
            question: 'What if GitHub stops support for their API?',
            answer: `Then I\'ll just keep the config elsewhere on the internet that
            does allow for APIs to modify repos. :)`,
        },
        {
            question: 'What if GitHub stops allowing users to host their personal websites with GH Pages?',
            answer: `Then I\'ll just host my site on another platform or pay for server space. There
            will ALWAYS be website hosting services as long as the internet continues to exist.`,
        },
        {
            question: 'APIs change, sevices migrate, technology moves on changes. What if one day it stops working?',
            answer: `Similar to the previous questions, I\'ll just update my code and serving methods.
            Nothing is forever and yes like everything else on the internet it does occasionally
            require some maintenance to stay running. 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BxV14h0kFs0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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
            question: 'What if your skin gets wrinkly as you age?',
            answer: `Then I'll probably need to stretch it taut to get good reading, what do you
            expect? I'm not going to NOT get a tattoo now because of how my skin's tightness may
            or may not be in my final couple decades. For all tattoos, there's still a massive
            amount of enjoyment people get from them even if the canvas degrades eventually.`,
        },
    ]

    // Tom Scott's API video embed:
}

export interface QuestionAndAnswer {
    question: string;
    answer: string;
}