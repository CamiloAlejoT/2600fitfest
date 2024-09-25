import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import {
  SECTIONS_AND_URLS,
  FIND_ID,
  ABOUT_ID,
  ALLIES_ID,
  COMPITE_ID,
  GENERAL_ID,
  CATEGORIES_ID,
} from '@/app/core/consts/urls.consts';
import { GeneralInformationComponent } from '@/app/components/general-information/general-information.component';
import { AboutComponent } from '@/app/components/about/about.component';
import { StandardsComponent } from '@/app/components/standards/standards.component';
import { CategoriesComponent } from '@/app/components/categories/categories.component';
import { FooterComponent } from '@/app/components/footer/footer.component';
import { FindComponent } from '@/app/components/find/find.component';
import { HowToComponent } from '@/app/components/how-to/how-to.component';
import { PartnerSponsorComponent } from '@/app/components/partner-sponsor/partner-sponsor.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    GeneralInformationComponent,
    AboutComponent,
    StandardsComponent,
    CategoriesComponent,
    FooterComponent,
    FindComponent,
    HowToComponent,
    PartnerSponsorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  // @ViewChild('generalInfo') observedElement!: ElementRef;

  IDS = {
    FIND_ID,
    ABOUT_ID,
    ALLIES_ID,
    COMPITE_ID,
    GENERAL_ID,
    CATEGORIES_ID,
  };

  sectionsAndUrls = SECTIONS_AND_URLS;
  actualSection: string = '';
  selectedCategory: number = 0;
  toggleHeader: boolean = true;

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('2600 Fit Fest');

    this.metaService.addTags([
      {
        name: 'description',
        content: '2600 Fit Fest - A great event for fitness enthusiasts.',
      },
      { name: 'keywords', content: 'fitness, event, competition' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: '2600 Fit Fest' }, // OpenGraph meta tag for social media
      {
        property: 'og:description',
        content: 'Join the 2600 Fit Fest for an amazing fitness experience.',
      },
      // { property: 'og:image', content: 'https://example.com/image.jpg' }, // OpenGraph image
    ]);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  setObs() {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.boundingClientRect.top === 0) {
              this.toggleHeader = true;
            } else {
              this.toggleHeader = false;
            }
          });
        },
        {
          threshold: [1.0],
        }
      );
      const tmp = document.getElementById(GENERAL_ID);
      if (tmp) observer.observe(tmp);
    }
  }

  scrollToSection(id: string) {
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  setNewCategory(selectedCategory: number) {
    this.selectedCategory = selectedCategory;
  }
}
