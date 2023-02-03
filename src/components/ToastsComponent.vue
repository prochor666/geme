<template>
    <NotificationGroup group="error">
        <div
            class="fixed top-0 right-0 max-w-sm min-w-[200px] h-0 flex items-start justify-end p-2 select-none z-[7020]"
        >
            <div class="w-full max-w-sm">
                <Notification
                    v-slot="{ notifications, close }"
                    enter="transform ease-out duration-300 transition"
                    enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
                    enter-to="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                    move="transition duration-500"
                    move-delay="delay-300"
                >
                    <div
                        v-for="notification in notifications"
                        :key="notification.id"
                        class="relative flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md border bg-red-500 border-red-400"
                    >
                        <div class="flex items-center justify-center pl-4">
                            <MdiAlertCircle class="h-7 w-7 text-white" />
                        </div>

                        <div class="px-4 py-2">
                            <div class="mr-2">
                                <span class="font-semibold text-white">{{
                                    notification.title
                                }}</span>
                                <p class="text-sm text-white">
                                    {{ notification.text }}
                                </p>
                            </div>
                        </div>

                        <button
                            class="absolute top-1 right-0 px-1 pt-1 cursor-pointer z-2000"
                            @click="close(notification.id)"
                        >
                            <MdiClose class="mx-1 h-5 w-5 text-white" />
                        </button>
                    </div>
                </Notification>
            </div>
        </div>
    </NotificationGroup>

    <NotificationGroup group="warning">
        <div
            class="fixed top-0 right-0 max-w-sm min-w-[200px] h-0 flex items-start justify-end p-2 select-none z-[7020]"
        >
            <div class="w-full max-w-sm">
                <Notification
                    v-slot="{ notifications, close }"
                    enter="transform ease-out duration-300 transition"
                    enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
                    enter-to="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                    move="transition duration-500"
                    move-delay="delay-300"
                >
                    <div
                        v-for="notification in notifications"
                        :key="notification.id"
                        class="relative flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md border bg-amber-500 border-amber-400"
                    >
                        <div class="flex items-center justify-center pl-4">
                            <MdiAlertCircle class="h-7 w-7 text-white" />
                        </div>

                        <div class="px-4 py-2">
                            <div class="mr-2">
                                <span class="font-semibold text-white">{{
                                    notification.title
                                }}</span>
                                <p class="text-sm text-white">
                                    {{ notification.text }}
                                </p>
                            </div>
                        </div>

                        <button
                            class="absolute top-1 right-0 px-1 pt-1 cursor-pointer z-2000"
                            @click="close(notification.id)"
                        >
                            <MdiClose class="mx-1 h-5 w-5 text-white" />
                        </button>
                    </div>
                </Notification>
            </div>
        </div>
    </NotificationGroup>

    <NotificationGroup group="success">
        <div
            class="fixed top-0 right-0 max-w-sm min-w-[200px] h-0 flex items-start justify-end p-2 select-none z-[7020]"
        >
            <div class="w-full max-w-sm">
                <Notification
                    v-slot="{ notifications, close }"
                    enter="transform ease-out duration-300 transition"
                    enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
                    enter-to="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                    move="transition duration-500"
                    move-delay="delay-300"
                >
                    <div
                        v-for="notification in notifications"
                        :key="notification.id"
                        class="relative flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md border border-emerald-400 bg-emerald-500"
                    >
                        <div class="flex items-center justify-center pl-4">
                            <MdiInformation class="h-7 w-7 text-white" />
                        </div>

                        <div class="px-4 py-2">
                            <div class="mr-2">
                                <span class="font-semibold text-white">{{
                                    notification.title
                                }}</span>
                                <p class="text-sm text-white">
                                    {{ notification.text }}
                                </p>
                            </div>
                        </div>

                        <button
                            class="absolute top-1 right-0 px-1 pt-1 cursor-pointer z-2000"
                            @click="close(notification.id)"
                        >
                            <MdiClose class="mx-1 h-5 w-5 text-white" />
                        </button>
                    </div>
                </Notification>
            </div>
        </div>
    </NotificationGroup>

    <NotificationGroup group="info">
        <div
            class="fixed top-0 right-0 max-w-sm min-w-[200px] h-0 flex items-start justify-end p-2 select-none z-[7020]"
        >
            <div class="w-full max-w-sm">
                <Notification
                    v-slot="{ notifications, close }"
                    enter="transform ease-out duration-300 transition"
                    enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
                    enter-to="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                    move="transition duration-500"
                    move-delay="delay-300"
                >
                    <div
                        v-for="notification in notifications"
                        :key="notification.id"
                        class="relative flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md border border-blue-400 bg-blue-500"
                    >
                        <div class="flex items-center justify-center pl-4">
                            <MdiInformation class="h-7 w-7 text-white" />
                        </div>

                        <div class="px-4 py-2">
                            <div class="mr-2">
                                <span class="font-semibold text-white">{{
                                    notification.title
                                }}</span>
                                <p class="text-sm text-white">
                                    {{ notification.text }}
                                </p>
                            </div>
                        </div>

                        <button
                            class="absolute top-1 right-0 px-1 pt-1 cursor-pointer z-2000"
                            @click="close(notification.id)"
                        >
                            <MdiClose class="mx-1 h-5 w-5 text-white" />
                        </button>
                    </div>
                </Notification>
            </div>
        </div>
    </NotificationGroup>
</template>

<script setup>
import {
    MdiAlertCircle,
    MdiInformation,
    MdiClose,
} from 'materialdesignicons-vue3/icons/';
</script>
