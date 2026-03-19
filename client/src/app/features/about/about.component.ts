import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Stat { number: string; label: string; }
interface TeamMember { avatar: SafeHtml; name: string; role: string; bio: string; }
interface Value { icon: SafeHtml; title: string; desc: string; }

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  stats: Stat[] = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '200+', label: 'Curated Products' },
    { number: '4.9★', label: 'Average Rating' },
    { number: '5', label: 'Years in Business' }
  ];

  team: TeamMember[] = [];
  values: Value[] = [];

  constructor(private sanitizer: DomSanitizer) {
    const getSvg = (svgStr: string) => this.sanitizer.bypassSecurityTrustHtml(svgStr);

    this.team = [
      { avatar: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`), name: 'Marcus Chen', role: 'Founder & CEO', bio: 'Mechanical keyboard obsessive since 2010. Built Techify to share his passion for great hardware.' },
      { avatar: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><circle cx="13.5" cy="10.5" r="2.5"/><path d="m8.5 15.5 3-3"/><path d="M10 2a8 8 0 1 0 8 8c0 4-4 4-4 4"/><path d="M14 6v.01"/></svg>`), name: 'Anika Sharma', role: 'Head of Design', bio: 'Former UX lead at Apple. Ensures every Techify touchpoint is beautifully crafted.' },
      { avatar: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/><path d="M8.52 11h6.96"/></svg>`), name: 'Jordan Ellis', role: 'Product Curator', bio: 'Tests over 100 products a year to find the ones that make the cut.' }
    ];

    this.values = [
      { icon: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>`), title: 'Rigorous Testing', desc: 'Every product is physically tested by our team before it lands in our catalog.' },
      { icon: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>`), title: 'Honest Reviews', desc: 'We call out flaws. Our reputation is built on trust, not affiliate commissions.' },
      { icon: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`), title: 'Sustainability', desc: 'We partner with manufacturers committed to responsible production practices.' },
      { icon: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`), title: 'Community First', desc: 'Our Discord has 30K+ members sharing tips, reviews, and custom builds.' }
    ];
  }
}
