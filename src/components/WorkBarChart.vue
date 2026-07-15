<template>
    <Pie :data="data" :options="options" />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { Pie } from 'vue-chartjs'
import { ref, onMounted } from 'vue'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

const data = ref({
    labels: ["Initial Education", "Freelance", "Contract", "Enterprise"],
    datasets: [
        {
            label: "Work Experience",
            data: [0,0,0,0],
            backgroundColor: [
                "#FF6384",
                "#8b5cf6",
                "#FFCE56",
                "#10b981"
            ]
        }
    ],
})

const options = {
    plugins: {
        animation: {
            duration: 1000,
            easing: 'easeOutQuart'
        },
        legend: {
            position: 'bottom',
            labels: {
                padding: 20,
                color: '#aeaec1',
            },
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    const dataset = context.dataset.data;
                    const total = dataset.reduce((sum, val) => sum + val, 0);
                    const value = dataset[context.dataIndex];
                    const years = (value / 12).toFixed(1);
                    const percentage = ((value / total) * 100).toFixed(1) + '%';
                    return ` ${percentage} (${years} years)`;
                }
            }
        },
        title: {
            display: true,
            text: 'Percent of total development experience by type',
            color: '#aeaec1',
            padding: {
                bottom: 20,
            },
            font: {
                size: 15,
                family: '"Space Grotesk", sans-serif',
            }
        }
    }
}

onMounted(() => {
    // Update chart data
    data.value = {
        labels: ["Initial Education", "Freelance", "Contract", "Enterprise/Agency"],
        datasets: [
            {
                label: "Work Experience",
                data: [18, 20, 4, 64],
                backgroundColor: [
                    "#FF6384",
                    "#8b5cf6",
                    "#FFCE56",
                    "#10b981"
                ]
            }
        ],
    }
})
</script>