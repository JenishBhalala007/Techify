import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ProductService {
    constructor() {
        this.products = [
            {
                id: 1,
                name: 'Apex Pro TKL Wireless',
                brand: 'SteelSeries',
                category: 'Keyboards',
                price: 219.99,
                originalPrice: 279.99,
                image: 'assets/keyboard1.png',
                tags: ['Mechanical', 'RGB'],
                rating: 4.8,
                reviewCount: 1247,
                inStock: true,
                description: 'Premium TKL mechanical keyboard with OmniPoint 2.0 adjustable switches and full RGB illumination.'
            },
            {
                id: 2,
                name: 'Onyx 65 Compact',
                brand: 'Techify',
                category: 'Keyboards',
                price: 149.99,
                originalPrice: 189.99,
                image: 'assets/keyboard2.png',
                tags: ['Compact', 'Wireless'],
                rating: 4.7,
                reviewCount: 892,
                inStock: true,
                description: 'Ultra-compact 65% layout with hot-swappable switches and per-key RGB underglow.'
            },
            {
                id: 3,
                name: 'Pearl Luxe Full-Size',
                brand: 'Techify',
                category: 'Keyboards',
                price: 289.99,
                image: 'assets/keyboard3.png',
                tags: ['Premium', 'Gasket'],
                rating: 4.9,
                reviewCount: 456,
                inStock: true,
                description: 'Luxury full-size keyboard with cream keycaps, gold accents, and premium gasket mount.'
            },
            {
                id: 4,
                name: 'Viper V3 Pro Wireless',
                brand: 'Razer',
                category: 'Mice',
                price: 159.99,
                originalPrice: 199.99,
                image: 'assets/mouse1.png',
                tags: ['Wireless', 'Ergonomic'],
                rating: 4.8,
                reviewCount: 2103,
                inStock: true,
                description: 'Professional wireless gaming mouse with Focus Pro 35K sensor and 90-hour battery life.'
            },
            {
                id: 5,
                name: 'Featherlight X Ultra',
                brand: 'Techify',
                category: 'Mice',
                price: 89.99,
                image: 'assets/mouse2.png',
                tags: ['Ultralight', 'Wired'],
                rating: 4.6,
                reviewCount: 784,
                inStock: true,
                description: 'Ultra-lightweight symmetric gaming mouse at only 48g with honeycomb shell design.'
            },
            {
                id: 6,
                name: 'CloudX Flight Pro',
                brand: 'HyperX',
                category: 'Audio',
                price: 129.99,
                originalPrice: 159.99,
                image: 'assets/headset1.png',
                tags: ['Wireless', '7.1 Surround'],
                rating: 4.7,
                reviewCount: 1567,
                inStock: true,
                description: 'Premium wireless gaming headset with DTS 7.1 Surround and 300-hour battery.'
            },
            {
                id: 7,
                name: 'UltraWide Pro 34"',
                brand: 'LG',
                category: 'Monitors',
                price: 899.99,
                originalPrice: 1099.99,
                image: 'assets/monitor1.png',
                tags: ['4K', 'Curved'],
                rating: 4.9,
                reviewCount: 341,
                inStock: true,
                description: '34-inch ultra-wide curved 4K display with 165Hz refresh rate and 1ms response time.'
            },
            {
                id: 8,
                name: 'Phantom TKL Silent',
                brand: 'Techify',
                category: 'Keyboards',
                price: 179.99,
                image: 'assets/keyboard_hero.png',
                tags: ['Silent', 'Mechanical'],
                rating: 4.6,
                reviewCount: 628,
                inStock: true,
                description: 'Whisper-quiet TKL keyboard with premium foam dampening and silent linear switches.'
            }
        ];
    }
    getAll() { return this.products; }
    getById(id) { return this.products.find(p => p.id === id); }
    getByCategory(cat) {
        return this.products.filter(p => p.category === cat);
    }
    getFeatured() { return this.products.slice(0, 8); }
    getCategories() { return ['Keyboards', 'Mice', 'Audio', 'Monitors']; }
    static { this.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=product.service.js.map