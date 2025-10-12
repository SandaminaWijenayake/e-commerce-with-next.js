import React from "react";
import { Award, Users, Target, Heart } from "lucide-react";
import Link from "next/link";

import Image, { StaticImageData } from "next/image";
import teamImage from "@/../public/assets/Copilot_20250821_061959.png";

import teamMember1 from "@/../public/assets/team/emily-rodriguez.jpg";
import teamMember2 from "@/../public/assets/team/michael-chen.jpg";
import teamMember3 from "@/../public/assets/team/sarah-johnson.jpg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string | StaticImageData;
  bio: string;
}

const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Founder & CEO",
    imageUrl: teamMember1,
    bio: "Sarah founded our company with a vision to make quality products accessible to everyone.",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Head of Design",
    imageUrl: teamMember2,
    bio: "Michael brings 15 years of design experience to create beautiful, functional products.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Operations Manager",
    imageUrl: teamMember3,
    bio: "Emily ensures smooth operations and exceptional customer experience.",
  },
];

const About: React.FC = () => {
  const stats = [
    { label: "Happy Customers", value: "10,000+" },
    { label: "Products Sold", value: "250,000+" },
    { label: "Years in Business", value: "5+" },
    { label: "Team Members", value: "50+" },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description:
        "We source only the highest quality products from trusted manufacturers and artisans.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "Your satisfaction is our priority. We listen, learn, and continuously improve.",
    },
    {
      icon: Target,
      title: "Innovation Driven",
      description:
        "We embrace new technologies and trends to bring you the latest and greatest .",
    },
    {
      icon: Heart,
      title: "Passion Powered",
      description:
        "We love what we do and it shows in every product we curate and every service we provide.",
    },
  ];

  return (
    <div className="min-h-screen">
      <main>
        <section className="relative py-24 bg-[#f8f7f5] overflow-hidden shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold  mb-6">
              About ShopCo
            </h1>
            <p className="text-xl md:text-2xl text-gray-500  max-w-3xl mx-auto leading-relaxed">
              We are passionate about bringing you quality products that enhance
              your lifestyle. Our journey started with a simple mission: make
              great design accessible to everyone.
            </p>
          </div>
        </section>

        <section className="py-16 shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl text-[#f97415] md:text-4xl font-bold text-accent-warm mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="mb-12 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-500  leading-relaxed mb-6">
                  At ShopCo, we believe that everyone deserves access to
                  well-designed, high-quality products that make life better. We
                  carefully curate our selection to bring you items that combine
                  functionality, style, and value.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  From the moment you browse our collection to the day your
                  order arrives at your door, we are committed to providing an
                  exceptional experience that exceeds your expectations.
                </p>

                <div className="flex flex-col font-medium sm:flex-row gap-4">
                  <Link href="/categories" className="btn">
                    Shop Our Collection
                  </Link>
                  <Link href="#" className="btn-gray">
                    Get in Touch
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden shadow-large">
                  <Image
                    src={teamImage}
                    alt="Our mission - quality products and great service"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bg-white -bottom-6 -left-6  z-20 rounded-lg shadow-2xl p-6 max-w-xs">
                  <div className="text-sm font-medium text-foreground mb-1">
                    Customer Satisfaction
                  </div>
                  <div className="text-2xl font-bold text-accent-warm">
                    99.5%
                  </div>
                  <div className="text-xs ">Based on 10,000+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                These core principles guide everything we do and shape the way
                we serve our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f9ede1] rounded-2xl mb-4 group-hover:bg-[#fcdebe] transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-[#f97415]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className=" leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg  max-w-2xl mx-auto">
                The passionate people behind ShopCo who work tirelessly to bring
                you the best products and service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockTeamMembers.map((member) => (
                <div key={member.id} className="text-center group">
                  <div className="relative mb-6">
                    <div className="aspect-square w-48 mx-auto bg-muted rounded-2xl overflow-hidden shadow-medium group-hover:shadow-large transition-shadow duration-300">
                      <Image
                        width={200}
                        height={200}
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent-warm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className=" text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24  bg-gradient-to-r from-[#f9ece2] to-[#e4e3e1]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Shop?
            </h2>
            <p className="text-lg  mb-8">
              Discover our carefully curated collection of products designed to
              enhance your life.
            </p>

            <div className="flex flex-col font-medium sm:flex-row gap-4 justify-center">
              <Link href="/categories" className="btn">
                Browse Products
              </Link>
              <Link href="/about" className="btn-muted">
                About us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
