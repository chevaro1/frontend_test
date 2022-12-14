import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages = {
    home: {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/horsebox5.jpg'},
    about: {title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/bg01.jpg'},
    contact: {title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bg02.jpg'}
  };
  constructor() { }
}
