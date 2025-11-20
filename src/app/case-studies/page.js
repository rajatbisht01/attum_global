"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Calendar, Users } from "lucide-react";


import { caseStudies } from "../../constant.ts";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                  Success Stories
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transforming Enterprises Through
                <span className="text-gradient"> Technology Excellence</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore how ATTUM has helped leading organizations across industries achieve their digital transformation goals with measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "6+", label: "Major Projects Delivered" },
                { value: "143+", label: "Engineers Deployed" },
                { value: "5", label: "Industries Transformed" },
                { value: "99.9%", label: "Average System Uptime" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-card border border-border shadow-card hover-lift transition-smooth"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid gap-12">
              {caseStudies.map((study, index) => (
                <article
                  key={study.id}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <div className="w-full h-[400px] relative">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover rounded-2xl shadow-hover hover-lift transition-smooth"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">
                        {study.pillar}
                      </span>
                      <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-semibold">
                        {study.industry}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {study.title}
                    </h2>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span>{study.client}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{study.duration}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground mb-6">
                      {study.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {study.results.slice(0, 4).map((result, idx) => (
                        <div key={idx} className="bg-muted/50 rounded-xl p-4">
                          <div className="text-2xl font-bold text-gradient mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-smooth group"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>

              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how ATTUM's expertise can help you achieve similar results.
              </p>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-smooth shadow-button"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
