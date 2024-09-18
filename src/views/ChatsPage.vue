<template>
    <div class="flex max-w-7xl mx-auto py-8 px-4 gap-8 h-[80vh]">
      <!-- Sidebar: Friends List -->
      <aside class="w-1/4 hidden lg:block bg-white rounded-lg shadow-md p-4 overflow-y-auto">
        <h2 class="text-2xl font-bold mb-4 text-primary">Chats</h2>
        <el-list>
          <el-list-item v-for="(friend, index) in friends" :key="index" @click="selectFriend(index)">
            <template #prefix>
              <el-avatar :src="friend.avatar" />
            </template>
            <div class="ml-2">
              <div>{{ friend.name }}</div>
              <small class="text-gray-500">{{ friend.lastMessage }}</small>
            </div>
          </el-list-item>
        </el-list>
      </aside>
  
      <!-- Main Chat Area -->
      <main class="flex-1 bg-white rounded-lg shadow-md flex flex-col overflow-hidden">
        <div class="p-4 bg-primary text-white">
          <h2 class="text-2xl">{{ selectedFriend.name }}</h2>
        </div>
        <!-- Chat Messages -->
        <div class="flex-1 p-4 overflow-y-auto">
          <div
            v-for="(message, index) in selectedFriend.messages"
            :key="index"
            :class="{'text-right': message.isUser, 'text-left': !message.isUser}"
            class="mb-4"
          >
            <el-avatar :src="message.avatar" class="inline-block mr-2" size="small" />
            <div
              :class="['inline-block', 'p-2', 'rounded-lg', message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black']"
            >
              <p>{{ message.text }}</p>
            </div>
          </div>
        </div>
        <!-- Chat Input -->
        <div class="p-4 bg-gray-100 flex items-center gap-4">
          <el-input
            v-model="newMessage"
            placeholder="Type a message..."
            clearable
            class="flex-1"
            @keyup.enter="sendMessage"
          />
          <el-button icon="el-icon-s-promotion" type="primary" circle @click="sendMessage" />
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const friends = ref([
    {
      name: 'SunnyGiraffe42',
      avatar: 'https://via.placeholder.com/40',
      lastMessage: 'Can’t wait for the sunny weekend!',
      messages: [
        { sender: 'SunnyGiraffe42', text: 'Hello! How are you enjoying the sunshine?', isUser: false, avatar: 'https://via.placeholder.com/40' },
        { sender: 'Me', text: 'Loving it! What about you?', isUser: true, avatar: 'https://via.placeholder.com/40' },
      ],
    },
    {
      name: 'RainyUnicorn99',
      avatar: 'https://via.placeholder.com/40',
      lastMessage: 'Rainy days are the best for a chat!',
      messages: [
        { sender: 'RainyUnicorn99', text: 'Rainy weather is perfect for deep conversations!', isUser: false, avatar: 'https://via.placeholder.com/40' },
        { sender: 'Me', text: 'Totally agree! Let’s talk more about it.', isUser: true, avatar: 'https://via.placeholder.com/40' },
      ],
    },
  ]);
  
  const selectedFriend = ref(friends.value[0]);
  const newMessage = ref('');
  
  function selectFriend(index) {
    selectedFriend.value = friends.value[index];
  }
  
  function sendMessage() {
    if (newMessage.value.trim() !== '') {
      selectedFriend.value.messages.push({
        sender: 'Me',
        text: newMessage.value,
        isUser: true,
        avatar: 'https://via.placeholder.com/40',
      });
      newMessage.value = ''; // Clear the input
    }
  }
  </script>
  
  <style scoped>
  /* Add some custom styling if necessary */
  </style>
  