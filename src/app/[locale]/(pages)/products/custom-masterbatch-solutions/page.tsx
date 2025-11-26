'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  Palette,
  Settings,
  Microscope,
  Users,
  Shield,
  Flame,
  Sun,
  CheckCircle,
  Target,
  Lightbulb,
  Package,
  Home,
  Car,
  Zap,
  Heart,
  Award,
  MessageSquare,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CTAbout from '@/app/[locale]/components/CTAAbout/CTAbout';
import { useTranslations } from 'next-intl';

const CustomMasterbatchPage: React.FC = () => {
  const t = useTranslations('customMasterbatch');

  const features = [
    {
      icon: Settings,
      title: t('features.items.formulations.title'),
      description: t('features.items.formulations.description'),
    },
    {
      icon: Palette,
      title: t('features.items.colors.title'),
      description: t('features.items.colors.description'),
    },
    {
      icon: Sparkles,
      title: t('features.items.functionalities.title'),
      description: t('features.items.functionalities.description'),
    },
    {
      icon: Microscope,
      title: t('features.items.testing.title'),
      description: t('features.items.testing.description'),
    },
    {
      icon: Users,
      title: t('features.items.support.title'),
      description: t('features.items.support.description'),
    },
  ];

  const functionalAdditions = [
    {
      icon: Sun,
      name: t('features.functional.items.uv'),
      color: 'text-yellow-500',
    },
    {
      icon: Flame,
      name: t('features.functional.items.flame'),
      color: 'text-orange-500',
    },
    {
      icon: Shield,
      name: t('features.functional.items.antioxidants'),
      color: 'text-blue-500',
    },
    {
      icon: Sparkles,
      name: t('features.functional.items.effects'),
      color: 'text-purple-500',
    },
  ];

  const applications = [
    {
      icon: Package,
      title: t('applications.items.packaging.title'),
      description: t('applications.items.packaging.description'),
    },
    {
      icon: Home,
      title: t('applications.items.household.title'),
      description: t('applications.items.household.description'),
    },
    {
      icon: Car,
      title: t('applications.items.automotive.title'),
      description: t('applications.items.automotive.description'),
    },
    {
      icon: Zap,
      title: t('applications.items.electrical.title'),
      description: t('applications.items.electrical.description'),
    },
    {
      icon: Heart,
      title: t('applications.items.medical.title'),
      description: t('applications.items.medical.description'),
    },
    {
      icon: Target,
      title: t('applications.items.unique.title'),
      description: t('applications.items.unique.description'),
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: t('process.steps.consultation.title'),
      description: t('process.steps.consultation.description'),
      icon: MessageSquare,
    },
    {
      number: '02',
      title: t('process.steps.formulation.title'),
      description: t('process.steps.formulation.description'),
      icon: Lightbulb,
    },
    {
      number: '03',
      title: t('process.steps.testing.title'),
      description: t('process.steps.testing.description'),
      icon: Microscope,
    },
    {
      number: '04',
      title: t('process.steps.implementation.title'),
      description: t('process.steps.implementation.description'),
      icon: Wrench,
    },
  ];

  const whyAramco = [
    {
      icon: Target,
      title: t('whyAramco.items.tailored.title'),
      description: t('whyAramco.items.tailored.description'),
    },
    {
      icon: Award,
      title: t('whyAramco.items.quality.title'),
      description: t('whyAramco.items.quality.description'),
    },
    {
      icon: Users,
      title: t('whyAramco.items.partnership.title'),
      description: t('whyAramco.items.partnership.description'),
    },
    {
      icon: Wrench,
      title: t('whyAramco.items.support.title'),
      description: t('whyAramco.items.support.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-background overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/80 to-background/90 z-10" />
          <Image
            src="/image/3.webp"
            alt="Custom Masterbatch Solutions"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Settings className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                {t('hero.title')}{' '}
                <span className="text-primary">{t('hero.titleHighlight')}</span>{' '}
                {t('hero.titleEnd')}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
              >
                <Target className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">
                  {t('hero.badges.precision')}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
              >
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">
                  {t('hero.badges.unlimited')}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
              >
                <Users className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">
                  {t('hero.badges.support')}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Custom Masterbatch */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('whatIs.title')}
              </h2>
            </div>
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-background border-primary/20">
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <Target className="h-16 w-16 text-primary" />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    {t('whatIs.description')}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {t('whatIs.highlight')}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('features.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <IconComponent className="h-12 w-12 text-primary mb-4" />
                      <CardTitle className="mb-3">{feature.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Functional Additions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-background">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {t('features.functional.title')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {functionalAdditions.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center text-center"
                    >
                      <IconComponent
                        className={`h-10 w-10 ${item.color} mb-3`}
                      />
                      <span className="text-sm font-medium">{item.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('process.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('process.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full text-center hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="text-6xl font-bold text-primary/20 mb-4">
                          {step.number}
                        </div>
                        <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                        <CardTitle className="mb-3">{step.title}</CardTitle>
                        <CardDescription className="leading-relaxed">
                          {step.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('applications.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('applications.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => {
                const IconComponent = app.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <IconComponent className="h-12 w-12 text-primary mb-4" />
                        <CardTitle className="mb-3">{app.title}</CardTitle>
                        <CardDescription className="leading-relaxed">
                          {app.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Aramco */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('whyAramco.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('whyAramco.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {whyAramco.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <IconComponent className="h-12 w-12 text-primary flex-shrink-0" />
                          <div>
                            <CardTitle className="mb-3">{item.title}</CardTitle>
                            <CardDescription className="leading-relaxed">
                              {item.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-background border-primary/20">
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                  <p className="text-xl text-foreground font-semibold mb-4">
                    {t('whyAramco.summary.title')}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      {t('whyAramco.summary.badges.formulations')}
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      {t('whyAramco.summary.badges.support')}
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      {t('whyAramco.summary.badges.team')}
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      {t('whyAramco.summary.badges.commitment')}
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTAbout />
    </div>
  );
};

export default CustomMasterbatchPage;
