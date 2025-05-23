<script setup lang="ts">
import type { Comment } from '@/types';

const comments = ref<Partial<Comment>[]>([]);

const { data } = await axiosFetch<{ comments: Comment[] }>('/comments');
comments.value = data.comments.map((comment) => ({
  id: comment.id,
}));
</script>

<template>
  <div>
    <h1>Comments</h1>
    <pre>{{ comments }}</pre>
  </div>
</template>
