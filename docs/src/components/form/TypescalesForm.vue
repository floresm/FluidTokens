<script setup lang="ts">
import {useTypescalesStore} from '../../stores/typescales';
import InputNumber from 'primevue/inputnumber';
import Slider from 'primevue/slider';
import Dropdown from 'primevue/dropdown';
import { ref } from "vue";

const stepWidths = ref([
  { name: 'Half Steps', code: 2 },
  { name: 'Full Steps', code: 1 }
]);

const typescales = useTypescalesStore();
</script>

<template>
  <form class="formgrid">
    <div class="grid mb-5">
      <div class="field col-12 md:col-3">
      <span class="p-float-label">
          <InputNumber id="minBreakpoint" v-model.number="typescales.minBreakpoint" class="w-full"/>
          <label for="minBreakpoint">Min Breakpoint</label>
      </span>
      </div>
      <div class="field col-12 md:col-3">
      <span class="p-float-label">
        <InputNumber id="minF0" v-model.number="typescales.minF0" class="w-full"/>
        <Slider v-model="typescales.minF0" :step="1" :min="8" :max="64"/>
        <label for="minBreakpoint">Min f0</label>
      </span>
      </div>
      <div class="field col-12 md:col-3">
      <span class="p-float-label">
        <InputNumber id="minR" v-model.number="typescales.minR" class="w-full" :format="false" :minFractionDigits="1" :maxFractionDigits="5"/>
        <Slider v-model="typescales.minR" :step="0.001" :min="1" :max="5"/>
        <label for="minR">Min r</label>
      </span>
      </div>
      <div class="field col-12 md:col-3">
      <span class="p-float-label">
        <InputNumber id="minF0" v-model.number="typescales.minN" class="w-full"/>
        <Slider v-model="typescales.minN" :step="1" :min="1" :max="32"/>
        <label for="minBreakpoint">Min N</label>
      </span>
      </div>
    </div>

    <div class="grid mb-5">
      <div class="field col-12 md:col-3">
        <span class="p-float-label">
            <InputNumber id="maxBreakpoint" v-model.number="typescales.maxBreakpoint" class="w-full"/>
            <label for="maxBreakpoint">Max Breakpoint</label>
        </span>
      </div>
      <div class="field col-12 md:col-3">
        <span class="p-float-label">
          <InputNumber id="maxF0" v-model.number="typescales.maxF0" class="w-full"/>
          <Slider v-model="typescales.maxF0" :step="1" :min="8" :max="64"/>
          <label for="maxBreakpoint">max f0</label>
        </span>
      </div>
      <div class="field col-12 md:col-3">
        <span class="p-float-label">
          <InputNumber id="maxR" v-model.number="typescales.maxR" class="w-full" :format="false" :minFractionDigits="1" :maxFractionDigits="5" />
          <Slider v-model="typescales.maxR" :step="0.001" :min="1" :max="5"/>
          <label for="maxR">max r</label>
        </span>
      </div>
      <div class="field col-12 md:col-3">
        <span class="p-float-label">
          <InputNumber id="maxF0" v-model.number="typescales.maxN" class="w-full"/>
          <Slider v-model="typescales.maxN" :step="1" :min="1" :max="32"/>
          <label for="maxBreakpoint">max N</label>
        </span>
      </div>
    </div>


    <div class="grid mb-5">
      <div class="field col-12 md:col-3">
        <span class="p-float-label">
          <InputNumber id="rem" v-model.number="typescales.rem" class="w-full" disabled/>
          <Slider v-model="typescales.rem" :step="1" :min="8" :max="64" disabled/>
          <label for="rem">Rem</label>
        </span>
      </div>
      <div class="field col-12 md:col-3">
        <span class="p-float-label">
          <InputNumber id="stepsDown" v-model.number="typescales.stepsDown" class="w-full"/>
          <Slider v-model="typescales.stepsDown" :step="1" :min="0" :max="8"/>
          <label for="stepsDown">Steps Down</label>
        </span>
      </div>
      <div class="field col-12 md:col-3">
        <span class="p-float-label">
          <InputNumber id="stepsUp" v-model.number="typescales.stepsUp" class="w-full"/>
          <Slider v-model="typescales.stepsUp" :step="1" :min="1" :max="32"/>
          <label for="stepsUp">Steps Up</label>
        </span>
      </div>
      <div class="field col-12 md:col-3">
        <span class="p-float-label">
          <Dropdown v-model.number="typescales.stepWidth" :options="stepWidths" optionLabel="name" optionValue="code" class="w-full"/>
          <label for="stepWidth">Step Width</label>
        </span>
      </div>
    </div>

    <div class="grid mb-5">
      <div class="field col-12">
        <span class="p-float-label">
          <InputNumber id="screenWidth" v-model.number="typescales.screenWidth" class="w-full"/>
          <Slider v-model="typescales.screenWidth" :step="1" :min="typescales.minBreakpoint" :max="typescales.maxBreakpoint"/>
          <label for="screenWidth">Screen Width</label>
        </span>
      </div>
    </div>


    <template>
      <div class="card flex justify-content-center">

      </div>
    </template>


    <div class="mb-3">


    </div>
  </form>
</template>
