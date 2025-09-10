
import React from 'react';

export interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

export interface NavItem {
  id: number;
  label: string;
  icon: React.ElementType;
}

export interface FacilityDetail {
  name: string;
  status: 'open' | 'arriving' | 'closed' | 'custom';
  statusText: string;
  details: string[];
}

export interface FacilityCategory {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  icon: React.ElementType;
  items: FacilityDetail[];
}

export interface LifeEvent {
  id: number;
  title: string;
  color: string;
  details: { icon: React.ElementType, text: string }[];
  buttonText: string;
}

export interface UpcomingEvent {
  id: number;
  title: string;
  subtitle: string;
  time: string;
  location: string;
  icon: React.ElementType;
  iconBgColor: string;
  buttonText: string;
  buttonColor: string;
}

export interface NewsArticle {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  author?: string;
  date: string;
  imageUrl?: string;
}
