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
  Palette,
  Sparkles,
  Shield,
  Thermometer,
  Wind,
  TrendingUp,
  CheckCircle,
  Award,
  Users,
  Leaf,
  Layers,
  Film,
  Box,
  Factory,
} from 'lucide-react';
import Image from 'next/image';
import CTAbout from '@/app/[locale]/components/CTAAbout/CTAbout';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const ColorMasterbatchPage: React.FC = () => {
  const t = useTranslations('colorMasterbatch');

  const features = [
    {
      icon: Sparkles,
      title: t('features.items.dispersion.title'),
      description: t('features.items.dispersion.description'),
    },
    {
      icon: Shield,
      title: t('features.items.fastness.title'),
      description: t('features.items.fastness.description'),
    },
    {
      icon: Thermometer,
      title: t('features.items.thermal.title'),
      description: t('features.items.thermal.description'),
    },
    {
      icon: Wind,
      title: t('features.items.dust.title'),
      description: t('features.items.dust.description'),
    },
    {
      icon: TrendingUp,
      title: t('features.items.efficiency.title'),
      description: t('features.items.efficiency.description'),
    },
  ];

  const applications = [
    { name: t('applications.items.film'), icon: Film },
    { name: t('applications.items.molding'), icon: Box },
    { name: t('applications.items.extrusion'), icon: Layers },
    { name: t('applications.items.industrial'), icon: Factory },
  ];

  const standardColors = [
    {
      name: t('colors.names.white'),
      color: 'bg-white border-2 border-gray-300',
    },
    { name: t('colors.names.black'), color: 'bg-black' },
    { name: t('colors.names.red'), color: 'bg-red-500' },
    { name: t('colors.names.blue'), color: 'bg-blue-500' },
    { name: t('colors.names.gray'), color: 'bg-gray-500' },
    { name: t('colors.names.orange'), color: 'bg-orange-500' },
    { name: t('colors.names.purple'), color: 'bg-purple-500' },
    { name: t('colors.names.brown'), color: 'bg-amber-700' },
    { name: t('colors.names.yellow'), color: 'bg-yellow-400' },
  ];

  const whyChoose = [
    {
      icon: Award,
      title: t('whyChoose.items.performance.title'),
      description: t('whyChoose.items.performance.description'),
    },
    {
      icon: TrendingUp,
      title: t('whyChoose.items.efficiency.title'),
      description: t('whyChoose.items.efficiency.description'),
    },
    {
      icon: Leaf,
      title: t('whyChoose.items.sustainability.title'),
      description: t('whyChoose.items.sustainability.description'),
    },
    {
      icon: Users,
      title: t('whyChoose.items.satisfaction.title'),
      description: t('whyChoose.items.satisfaction.description'),
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
            src="/image/2.png"
            alt="Color Masterbatch Production"
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
              <Palette className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                {t('hero.title')}{' '}
                <span className="text-primary">{t('hero.titleHighlight')}</span>
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
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">
                  {t('hero.badges.vibrant')}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
              >
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">
                  {t('hero.badges.consistent')}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
              >
                <Award className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">
                  {t('hero.badges.premium')}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Color Masterbatch */}
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
            <Card className="p-8 lg:p-12">
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <Palette className="h-16 w-16 text-primary" />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('whatIs.description')}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Available Colors */}
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
                {t('colors.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('colors.subtitle')}
              </p>
            </div>

            {/* Standard Colors */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                {t('colors.standard')}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
                {standardColors.map((color, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div
                      className={`${color.color} w-20 h-20 rounded-full shadow-lg mb-3 transition-transform`}
                    />
                    <span className="text-sm font-medium text-center">
                      {color.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Custom Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-background border-primary/20">
                <div className="flex items-start gap-6">
                  <Sparkles className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {t('colors.custom.title')}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('colors.custom.description')}
                    </p>
                    <Link href={'/contact'}>
                      <Button className="mt-6">
                        {t('colors.custom.button')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
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
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('applications.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('applications.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => {
                const IconComponent = app.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                      <div className="flex items-center gap-4">
                        <IconComponent className="h-10 w-10 text-primary flex-shrink-0" />
                        <h3 className="text-xl font-semibold text-foreground">
                          {app.name}
                        </h3>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Aramco */}
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
                {t('whyChoose.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('whyChoose.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChoose.map((item, index) => {
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
              className="mt-12 text-center"
            >
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-background">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('whyChoose.summary.text')}{' '}
                  <span className="font-semibold text-foreground">
                    {t('whyChoose.summary.quality')}
                  </span>
                  {t('whyChoose.summary.improve')}{' '}
                  <span className="font-semibold text-foreground">
                    {t('whyChoose.summary.productionEfficiency')}
                  </span>
                  {t('whyChoose.summary.support')}{' '}
                  <span className="font-semibold text-foreground">
                    {t('whyChoose.summary.environmental')}
                  </span>{' '}
                  {t('whyChoose.summary.allWith')}{' '}
                  <span className="font-semibold text-foreground">
                    {t('whyChoose.summary.customer')}
                  </span>
                  {t('whyChoose.summary.end')}
                </p>
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

export default ColorMasterbatchPage;
