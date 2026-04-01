import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-description',
  imports: [],
  templateUrl: './feature-description.html',
  styleUrl: './feature-description.scss'
})
export class FeatureDescription {
  protected items: FeatureDescriptionItem[] = [
    {
      title: 'Wider Port Coverage',
      description: "For your new car's delivery, our fleet of vessels ensures you can reach smaller, more local ports anywhere in the world. Not only does this allow you to expand your customer base but also means you can enjoy a greater choice of delivery points. This, combined with less unnecessary inland transport, and fewer transshipments helps make your overall supply chain faster and more efficient.",
      imgSrc: '../../../../../assets/images/big-port.webp'
    },
    {
      title: 'Faster and more Reliable Transit',
      description: "Our capacity and global network allows us to offer you the  and most frequent ocean services available for your new car transportation needs. As a business, you’ll benefit from weekly sailings, helping to provide quicker transit times and ensuring timely delivery to your customers.",
      imgSrc: '../../../../../assets/images/cars-in-truck.jpg'
    },
    {
      title: 'Premium Level of Care',
      description: "When it comes to considering the ‘best way to move a car’, we meticulously handle every shipment, providing thorough car inspections, precise loading and lashing of vehicles and careful unloading. To ensure stability and protect your valuable new car from vibrations during transit, each vehicle is securely fastened inside our containers using advanced lashing techniques. It’s this attention to detail that helps significantly reduce the risk of scratches and accidents and means that your vehicles are transported with the highest level of precision and care.  ",
      imgSrc: '../../../../../assets/images/premium-car-in-conteiner.webp'
    },
    {
      title: 'Experience and Expertise',
      description: "All our new car shipping processes are designed around your car production timetables and handling specifications to provide your business with the tailor-made solutions you need. Beyond this, you’ll be working with a global network of dedicated experts who are with you at every step. From car collection at origin to final delivery at destination, we will work with you to optimize your new car transportation supply chain so you can focus on delivering the very best to your customers.",
      imgSrc: '../../../../../assets/images/police-care.webp'
    },
  ];
}

export interface FeatureDescriptionItem {
  title: string;
  description: string;
  imgSrc: string;
}