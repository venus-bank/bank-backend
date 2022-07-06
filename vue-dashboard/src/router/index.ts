import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { useLoadingStore } from '@/stores/loading.store';
import { useCountriesStore } from '@/stores/countries.store';
import { useExchangeRatesStore } from '@/stores/exchange-rates';
import { useCitiesStore } from '@/stores/cities.store';
import { useCategoriesStore } from '@/stores/categories.store';
import { useSubCategoryStore } from '@/stores/sub-categories.store';
import { useJobsStore } from '@/stores/jobs.store';
import { useOurPartnerStore } from '@/stores/our-partners.store';
import { useFinancialReportStore } from '@/stores/financial-reports.store';
import { useNewsStore } from '@/stores/news.store';
import { useMainServiceStore } from '@/stores/main-services.store';
import { useServicePointStore } from '@/stores/service-points.store';
import { useServiceStore } from '@/stores/services.store';

const websiteInfoRoutes: RouteRecordRaw = {
  path: '/',
  name: 'website-info',
  component: () => import('@/views/website-info/WebsiteInfoView.vue'),
  meta: {
    module: 'website-info',
  },
  beforeEnter() {
    let loadingStore = useLoadingStore();

    loadingStore.loading = true;
  },

  children: [
    {
      path: '/',
      component: () => import('@/views/website-info/AboutUs.view.vue'),
      meta: {
        module: 'website-info',
        subModule: 'about-us',
      },
    },
    {
      path: '/apply-for-service',
      component: () => import('@/views/website-info/ApplyForService.view.vue'),
      meta: {
        module: 'website-info',
        subModule: 'apply-for-service',
      },
    },
    {
      path: '/values-principles',
      component: () => import('@/views/website-info/ValuesPrinciples.view.vue'),
      meta: {
        module: 'website-info',
        subModule: 'values-principles',
      },
    },
    {
      path: '/strategy-statement',
      component: () => import('@/views/website-info/StrategyStatement.view.vue'),
      meta: {
        module: 'website-info',
        subModule: 'strategy-statement',
      },
    },
    {
      path: '/board-members',
      component: () => import('@/views/website-info/BoardMembers.view.vue'),
      meta: {
        module: 'website-info',
        subModule: 'board-members',
      },
    },
    {
      path: '/contact-us',
      component: () => import('@/views/website-info/ContactUs.view.vue'),
      meta: {
        module: 'website-info',
        subModule: 'contact-us',
      },
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('@/views/privacy-policy/PrivacyPolicyView.vue'),
      meta: {
        module: 'website-info',
        subModule: 'privacy-policy',
      },
    },
    {
      path: '/social-media',
      name: 'social-media',
      meta: {
        module: 'website-info',
        subModule: 'social-media',
      },
      component: () => import('@/views/social-media/SocialMediaView.vue'),
    },
  ],
};

const servicePointsRoutes: RouteRecordRaw = {
  path: '/service-points',
  name: 'service-points',
  component: () => import('@/views/service-points/Index.view.vue'),

  async beforeEnter() {
    const citiesStore = useCitiesStore();
    let servicePointStore = useServicePointStore();

    await servicePointStore.getServicePoints();
    await citiesStore.getCities();
  },

  children: [
    {
      path: '',
      name: 'service-points-page',
      meta: { module: 'getAll' },
      component: () => import('@/views/service-points/Table.view.vue'),
      async beforeEnter() {
        useLoadingStore().loading = true;

        const citiesStore = useCitiesStore();
        let servicePointStore = useServicePointStore();

        await servicePointStore.getServicePoints();
        await citiesStore.getCities();
      },
    },
    {
      path: '/service-points/add',
      name: 'add-service-points',
      meta: { module: 'add' },
      component: () => import('@/views/service-points/Add.view.vue'),
    },
    {
      path: '/service-points/:id/edit',
      name: 'edit-service-point',
      meta: { module: 'edit' },
      component: () => import('@/views/service-points/Edit.view.vue'),
    },
    {
      path: '/service-points/:id/show',
      name: 'show-service-point',
      meta: { module: 'show' },
      component: () => import('@/views/service-points/Show.view.vue'),
    },
  ],
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    websiteInfoRoutes,
    servicePointsRoutes,
    {
      path: '/exchange-rates',
      name: 'exchange-rates',
      component: () => import('@/views/exchange-rates/ExchangeRatesView.vue'),
      async beforeEnter() {
        useLoadingStore().loading = true;

        await useExchangeRatesStore().getExchangeRates();
      },
    },
    {
      path: '/countries',
      name: 'countries',
      component: () => import('@/views/countries/CountriesView.vue'),
      async beforeEnter() {
        useLoadingStore().loading = true;

        await useCountriesStore().getCountries();
      },
    },
    {
      path: '/cities',
      name: 'cities',
      component: () => import('@/views/cities/CitiesView.vue'),
      async beforeEnter() {
        useLoadingStore().loading = true;

        await useCitiesStore().getCities();
      },
    },

    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/views/categories/CategoriesView.vue'),
      async beforeEnter() {
        useLoadingStore().loading = true;

        await useCategoriesStore().getCategories();
      },
    },
    {
      path: '/sub-categories',
      name: 'sub-categories',
      component: () => import('@/views/sub-categories/SubCategoriesView.vue'),
      async beforeEnter() {
        useLoadingStore().loading = true;

        await useSubCategoryStore().getSubCategories();
      },
    },

    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('@/views/jobs/JobsView.vue'),
      async beforeEnter() {
        useLoadingStore().loading = true;

        await useJobsStore().getJobs();
      },
    },

    {
      path: '/our-partners',
      name: 'our-partners',
      component: () => import('@/views/our-partners/OurPartnersView.vue'),
      async beforeEnter() {
        useLoadingStore().loading = true;

        await useOurPartnerStore().getOurPartners();
      },
    },

    {
      path: '/financial-reports',
      name: 'financial-reports',
      component: () => import('@/views/financial-reports/FinancialReportsView.vue'),
      async beforeEnter() {
        useLoadingStore().loading = true;

        await useFinancialReportStore().getFinancialReports();
      },
    },

    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/news/NewsView.vue'),
      async beforeEnter() {
        useLoadingStore().loading = true;

        await useNewsStore().getNews();
      },
    },

    {
      path: '/main-services',
      name: 'main-services',
      component: () => import('@/views/main-services/MainServicesView.vue'),
      async beforeEnter() {
        useLoadingStore().loading = true;

        await useMainServiceStore().getMainServices();
      },
    },

    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/services/ServicesView.vue'),
      async beforeEnter() {
        useLoadingStore().loading = true;

        await useServiceStore().getServices();
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.afterEach(() => {
  let loadingStore = useLoadingStore();

  loadingStore.loading = false;
});
export default router;
