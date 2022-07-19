<template>
    <div class="navBar-bottom">
        <div>
            <p>footer component. othi @2022</p>
        </div>
        <div class="mx-6">
            <select v-model="$colorMode.preference">
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="sepia">Sepia</option>
            </select>
        </div>
    </div>
</template>
