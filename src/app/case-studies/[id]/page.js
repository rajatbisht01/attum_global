import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Building2, Calendar, Users, CheckCircle2, Quote } from "lucide-react";

import { caseStudies } from "../../../constant.ts";

export default function CaseStudyDetail({ params }) {
  const { id } = params;
  const caseStudy = caseStudies.find((study) => study.id === id);

  if (!caseStudy) return notFound();

  return (
    <div className="min-h-screen bg-background">


      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>

            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                  {caseStudy.pillar}
                </span>
                <span className="px-4 py-2 bg-white text-muted-foreground rounded-full text-sm font-semibold">
                  {caseStudy.industry}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                {caseStudy.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">{caseStudy.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{caseStudy.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{caseStudy.teamSize}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-0">
          <div className="container mx-auto px-6 lg:px-8">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              width={1600}
              height={900}
              className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl shadow-hover"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {caseStudy.description}
              </p>
            </div>
          </div>
        </section>

        {/* Results Cards */}
        <section className="py-16 bg-muted/10">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Key Results
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl p-6 shadow-card hover-lift transition-smooth text-center"
                  >
                    <div className="text-4xl font-bold text-gradient mb-3">
                      {result.value}
                    </div>
                    <div className="text-sm text-black">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Challenge */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {caseStudy.solution}
                </p>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-hover">
                  <Quote className="w-12 h-12 text-primary mb-6" />
                  <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">
                        {caseStudy.testimonial.author}
                      </div>
                      <div className="text-muted-foreground">
                        {caseStudy.testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 via-background to-primary/5 rounded-2xl p-12 border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Your Success Story?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how ATTUM can help transform your business with our specialized Centers of Excellence.
              </p>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-smooth shadow-button"
              >
                Start Your Transformation
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
