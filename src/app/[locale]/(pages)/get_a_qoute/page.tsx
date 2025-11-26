'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Award,
  FileText,
  Users,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select';
import { div } from 'framer-motion/client';

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const benefits = [
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Get your quote within 24 hours',
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Competitive pricing guaranteed',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated account manager',
    },
    {
      icon: FileText,
      title: 'Custom Solutions',
      description: 'Tailored to your needs',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Fill the Form',
      description: 'Provide your requirements and contact details',
    },
    {
      number: '02',
      title: 'Review & Analysis',
      description: 'Our team evaluates your needs',
    },
    {
      number: '03',
      title: 'Receive Quote',
      description: 'Get a detailed quote within 24 hours',
    },
    {
      number: '04',
      title: 'Start Production',
      description: 'Upon approval, we begin manufacturing',
    },
  ];

  return (
    // <div className="flex flex-col">
    //   {/* Hero Section */}
    //   <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    //     <div className="absolute inset-0 opacity-10">
    //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    //     </div>

    //     <div className="container mx-auto px-4 text-center relative z-10 text-white">
    //       <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    //         <Badge
    //           variant="secondary"
    //           className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2"
    //         >
    //           Request a Quote
    //         </Badge>

    //         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
    //           Get Your{' '}
    //           <span className="text-primary bg-primary/10 px-2 rounded">
    //             Custom Quote
    //           </span>
    //         </h1>

    //         <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
    //           Tell us about your project and receive a competitive quote within
    //           24 hours
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Benefits Section */}
    //   <section className="py-20 relative overflow-hidden">
    //     <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
    //     <div className="container mx-auto px-4 relative z-10">
    //       <div className="text-center mb-16">
    //         <Badge variant="outline" className="mb-4">
    //           Why Request from Us
    //         </Badge>
    //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
    //           Quote Benefits
    //         </h2>
    //         <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
    //           Experience hassle-free quoting process with guaranteed quality
    //         </p>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    //         {benefits.map((benefit, index) => {
    //           const IconComponent = benefit.icon;
    //           return (
    //             <div key={index}>
    //               <Card className="group hover:shadow-2xl transition-all duration-300 h-full border-2 hover:border-primary/50 relative overflow-hidden">
    //                 <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    //                 <CardHeader className="text-center relative z-10">
    //                   <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
    //                     <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
    //                   </div>
    //                   <CardTitle className="text-xl mb-3">
    //                     {benefit.title}
    //                   </CardTitle>
    //                 </CardHeader>
    //                 <CardContent className="relative z-10">
    //                   <CardDescription className="text-center leading-relaxed">
    //                     {benefit.description}
    //                   </CardDescription>
    //                 </CardContent>
    //               </Card>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Main Form Section */}
    //   <section className="py-20 bg-muted/30 relative overflow-hidden">
    //     <div className="absolute inset-0 opacity-5">
    //       <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
    //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
    //     </div>

    //     <div className="container px-4 lg:px-10 relative z-10">
    //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
    //         {/* Form */}
    //         <div>
    //           <Card className="shadow-2xl border-2">
    //             <CardHeader>
    //               <CardTitle className="text-2xl md:text-3xl">
    //                 Request Your Quote
    //               </CardTitle>
    //               <CardDescription className="text-base">
    //                 Fill out the form below and we'll get back to you shortly
    //               </CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //               <div className="space-y-6">
    //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //                   <div className="space-y-2">
    //                     <Label htmlFor="name">Full Name *</Label>
    //                     <Input
    //                       id="name"
    //                       placeholder="John Doe"
    //                       value={formData.name}
    //                       onChange={(e) => handleChange('name', e.target.value)}
    //                       className="h-12"
    //                     />
    //                   </div>

    //                   <div className="space-y-2">
    //                     <Label htmlFor="email">Email Address *</Label>
    //                     <Input
    //                       id="email"
    //                       type="email"
    //                       placeholder="john@example.com"
    //                       value={formData.email}
    //                       onChange={(e) =>
    //                         handleChange('email', e.target.value)
    //                       }
    //                       className="h-12"
    //                     />
    //                   </div>
    //                 </div>

    //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //                   <div className="space-y-2">
    //                     <Label htmlFor="phone">Phone Number *</Label>
    //                     <Input
    //                       id="phone"
    //                       type="tel"
    //                       placeholder="+1 (555) 000-0000"
    //                       value={formData.phone}
    //                       onChange={(e) =>
    //                         handleChange('phone', e.target.value)
    //                       }
    //                       className="h-12"
    //                     />
    //                   </div>

    //                   <div className="space-y-2">
    //                     <Label htmlFor="company">Company Name</Label>
    //                     <Input
    //                       id="company"
    //                       placeholder="Your Company"
    //                       value={formData.company}
    //                       onChange={(e) =>
    //                         handleChange('company', e.target.value)
    //                       }
    //                       className="h-12"
    //                     />
    //                   </div>
    //                 </div>

    //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //                   <div className="space-y-2">
    //                     <Label htmlFor="productType">Product Type *</Label>
    //                     <Select
    //                       value={formData.productType}
    //                       onValueChange={(value) =>
    //                         handleChange('productType', value)
    //                       }
    //                     >
    //                       <SelectTrigger className="h-12">
    //                         <SelectValue placeholder="Select product type" />
    //                       </SelectTrigger>
    //                       <SelectContent>
    //                         <SelectItem value="filler">
    //                           Filler Masterbatch
    //                         </SelectItem>
    //                         <SelectItem value="color">
    //                           Color Masterbatch
    //                         </SelectItem>
    //                         <SelectItem value="custom">
    //                           Custom Solutions
    //                         </SelectItem>
    //                         <SelectItem value="other">Other</SelectItem>
    //                       </SelectContent>
    //                     </Select>
    //                   </div>

    //                   <div className="space-y-2">
    //                     <Label htmlFor="quantity">Estimated Quantity</Label>
    //                     <Input
    //                       id="quantity"
    //                       placeholder="e.g., 1000 kg"
    //                       value={formData.quantity}
    //                       onChange={(e) =>
    //                         handleChange('quantity', e.target.value)
    //                       }
    //                       className="h-12"
    //                     />
    //                   </div>
    //                 </div>

    //                 <div className="space-y-2">
    //                   <Label htmlFor="message">Project Details *</Label>
    //                   <Textarea
    //                     id="message"
    //                     placeholder="Tell us about your requirements, specifications, and any other relevant details..."
    //                     value={formData.message}
    //                     onChange={(e) =>
    //                       handleChange('message', e.target.value)
    //                     }
    //                     rows={6}
    //                     className="resize-none"
    //                   />
    //                 </div>

    //                 <Button
    //                   onClick={handleSubmit}
    //                   size="lg"
    //                   className="w-full text-lg h-14 shadow-xl hover:shadow-2xl transition-all duration-300"
    //                 >
    //                   <Send className="mr-2 h-5 w-5" />
    //                   Submit Request
    //                 </Button>
    //               </div>
    //             </CardContent>
    //           </Card>
    //         </div>

    //         {/* Contact Info & Steps */}
    //         <div className="space-y-8">
    //           {/* Contact Information */}
    //           <Card className="shadow-xl">
    //             <CardHeader>
    //               <CardTitle className="text-2xl">
    //                 Contact Information
    //               </CardTitle>
    //               <CardDescription>
    //                 Prefer to reach out directly? Use any of these methods
    //               </CardDescription>
    //             </CardHeader>
    //             <CardContent className="space-y-4">
    //               <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
    //                 <div className="p-2 bg-primary/10 rounded-lg">
    //                   <Phone className="h-5 w-5 text-primary" />
    //                 </div>
    //                 <div>
    //                   <p className="font-semibold mb-1">Phone</p>
    //                   <p className="text-muted-foreground">+1 (555) 123-4567</p>
    //                 </div>
    //               </div>

    //               <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
    //                 <div className="p-2 bg-primary/10 rounded-lg">
    //                   <Mail className="h-5 w-5 text-primary" />
    //                 </div>
    //                 <div>
    //                   <p className="font-semibold mb-1">Email</p>
    //                   <p className="text-muted-foreground">sales@company.com</p>
    //                 </div>
    //               </div>

    //               <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
    //                 <div className="p-2 bg-primary/10 rounded-lg">
    //                   <MapPin className="h-5 w-5 text-primary" />
    //                 </div>
    //                 <div>
    //                   <p className="font-semibold mb-1">Address</p>
    //                   <p className="text-muted-foreground">
    //                     123 Business St, Industrial Area
    //                   </p>
    //                 </div>
    //               </div>
    //             </CardContent>
    //           </Card>

    //           {/* Process Steps */}
    //           <Card className="shadow-xl">
    //             <CardHeader>
    //               <CardTitle className="text-2xl">How It Works</CardTitle>
    //               <CardDescription>
    //                 Simple 4-step process to get your quote
    //               </CardDescription>
    //             </CardHeader>
    //             <CardContent className="space-y-6">
    //               {steps.map((step, index) => (
    //                 <div key={index} className="flex items-start space-x-4">
    //                   <div className="flex-shrink-0">
    //                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
    //                       {step.number}
    //                     </div>
    //                   </div>
    //                   <div>
    //                     <h3 className="font-bold text-lg mb-1">{step.title}</h3>
    //                     <p className="text-muted-foreground text-sm leading-relaxed">
    //                       {step.description}
    //                     </p>
    //                   </div>
    //                 </div>
    //               ))}
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Trust Section */}
    //   <section className="py-20 relative overflow-hidden">
    //     <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
    //     <div className="container mx-auto px-4 relative z-10">
    //       <div className="text-center">
    //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
    //           Trusted by Industry Leaders
    //         </h2>
    //         <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
    //           Join hundreds of satisfied clients who trust us for their
    //           masterbatch needs
    //         </p>

    //         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
    //           {[
    //             { value: '25+', label: 'Happy Clients' },
    //             { value: '50+', label: 'Projects Done' },
    //             { value: '75+', label: 'Countries' },
    //             { value: '100+', label: 'Team Members' },
    //           ].map((item, idx) => (
    //             <div
    //               key={idx}
    //               className="p-8 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    //             >
    //               <div className="text-4xl font-bold text-primary">
    //                 {item.value}
    //               </div>
    //               <p className="text-sm text-muted-foreground mt-2">
    //                 {item.label}
    //               </p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div></div>
  );
}
