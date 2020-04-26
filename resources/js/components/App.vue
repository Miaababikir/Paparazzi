<template>
    <div>
        <section class="m-16">
            <h1 class="text-5xl font-semibold mb-8">Panels</h1>
            <base-panel class="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorem est exercitationem minus nihil
                nobis quia quibusdam rerum veritatis voluptatem?
            </base-panel>

            <base-panel class="mb-8 flex" noPadding>
                <div class="bg-blue-500 w-64"></div>
                <div class="flex-1 px-6 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eius eum minus
                    nemo omnis pariatur
                    voluptas? Accusantium ipsa quidem repellat.
                </div>
            </base-panel>

            <base-panel class="mb-8" title="My title" sub="Some metadata">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloribus ex in inventore libero
                odio quo quod repellendus sunt ullam!
            </base-panel>
        </section>

        <section class="m-16">
            <h1 class="text-5xl font-semibold mb-8">Buttons</h1>
            <table class="w-full">
                <tr class="font-semibold">
                    <td>Default</td>
                    <td>Danger</td>
                    <td>Primary</td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button primary>Primary</base-button>
                    </td>
                </tr>

                <tr>
                    <td class="py-6">
                        <base-button small>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button danger small>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button primary small>Primary</base-button>
                    </td>
                </tr>

                <tr>
                    <td class="py-6">
                        <base-button disabled>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button danger disabled>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button primary disabled>Primary</base-button>
                    </td>
                </tr>

                <tr>
                    <td class="py-6">
                        <base-button small disabled>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button danger small disabled>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button primary small disabled>Primary</base-button>
                    </td>
                </tr>
            </table>
        </section>

        <section class="m-16">
            <h1 class="text-5xl font-semibold mb-8">From elements</h1>
            <base-panel>
                <base-input v-model="name" label="Name" class="mb-4"></base-input>
                <base-input v-model="dateOfBirth" label="Date of birth" type="date"></base-input>
                <base-select v-model="plan" :options="availablePlans" label="Select a plan"></base-select>
                <base-checkbox v-model="subscribeToNewsletter" label="Subscribe me to your monthly newsletter"></base-checkbox>

            </base-panel>
        </section>

    </div>
</template>

<script>
    import BasePanel from "./BasePanel";
    import BaseButton from "./BaseButton";
    import BaseInput from "./BaseInput";
    import BaseSelect from "./BaseSelect";
    import BaseCheckbox from "./BaseCheckbox";

    export default {
        components: {BasePanel, BaseButton, BaseInput, BaseSelect, BaseCheckbox},
        data() {
            return {
                name: '',
                dateOfBirth: '',
                plan: 'starter',
                availablePlans: [
                    { value: 'free', name: 'Free'},
                    { value: 'starter', name: 'Starter ($5/month)'},
                    { value: 'premium', name: 'Premium ($10/month)'},
                    { value: 'business', name: 'Business ($15/month)'}
                ],
                subscribeToNewsletter: false
            }
        }
    }
</script>
