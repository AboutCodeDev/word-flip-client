<script setup lang="ts">
import { computed } from 'vue';

const SIZES = {
  xs: 'font-xs',
  s: 'font-s',
  m: 'font-m',
  l: 'font-l',
  xl: 'font-xl',
};

const WEIGHTS = {
  400: 'w-400',
  500: 'w-500',
  600: 'w-600',
};

const COLORS = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  error: 'text-error',
  'on-primary': 'text-on-primary',
  'on-secondary': 'text-on-secondary',
  'on-tertiary': 'text-on-tertiary',
  'on-error': 'text-on-error',
  'on-primary-container': 'text-on-primary-container',
  'on-secondary-container': 'text-on-secondary-container',
  'on-tertiary-container': 'text-on-tertiary-container',
  'on-error-container': 'text-on-error-container',
  'on-surface': 'text-on-surface',
  'on-surface-variant': 'text-on-surface-variant',
  outline: 'text-outline',
  'outline-variant': 'text-outline-variant',
  'inverse-on-surface': 'text-inverse-on-surface',
};

type AppTextTag =
  | 'span'
  | 'p'
  | 'div'
  | 'label'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

interface AppTextProps {
  tag: AppTextTag;
  size: keyof typeof SIZES;
  weight: keyof typeof WEIGHTS;
  color: keyof typeof COLORS;
}

const {
  tag = 'p',
  size = 's',
  weight = '400',
  color = 'on-surface',
} = defineProps<AppTextProps>();

const classes = computed(() => [
  'app-text',
  SIZES[size],
  WEIGHTS[weight],
  COLORS[color],
]);
</script>

<template>
  <component :is="tag" :class="classes">
    <slot></slot>
  </component>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.font-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-s {
  font-size: 14px;
  line-height: 20px;
}
.font-m {
  font-size: 16px;
  line-height: 24px;
}
.font-l {
  font-size: 18px;
  line-height: 28px;
}
.font-xl {
  font-size: 22px;
  line-height: 34px;
}
.w-400 {
  font-weight: 400;
}
.w-500 {
  font-weight: 500;
}
.w-600 {
  font-weight: 600;
}
.text-primary {
  color: var(--primary);
}
.text-secondary {
  color: var(--secondary);
}
.text-tertiary {
  color: var(--tertiary);
}
.text-error {
  color: var(--error);
}
.text-on-primary {
  color: var(--on-primary);
}
.text-on-secondary {
  color: var(--on-secondary);
}
.text-on-tertiary {
  color: var(--on-tertiary);
}
.text-on-error {
  color: var(--on-error);
}
.text-on-primary-container {
  color: var(--on-primary-container);
}
.text-on-secondary-container {
  color: var(--on-secondary-container);
}
.text-on-tertiary-container {
  color: var(--on-tertiary-container);
}
.text-on-error-container {
  color: var(--on-error-container);
}
.text-on-surface {
  color: var(--on-surface);
}
.text-on-surface-variant {
  color: var(--on-surface-variant);
}
.text-outline {
  color: var(--outline);
}
.text-outline-variant {
  color: var(--outline-variant);
}
.text-inverse-on-surface {
  color: var(--inverse-on-surface);
}
</style>
