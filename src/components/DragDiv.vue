<template>
  <div class="draggable" :style="{ top: posY + 'px', left: posX + 'px', width: width + 'px', height: height + 'px' }">
    <div class="drag-handle" @mousedown="startDrag"></div>
    <div class="resize-handle bottom-right" @mousedown="startResize"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDragging: false,
      isResizing: false,
      dragStartX: 0,
      dragStartY: 0,
      resizeStartX: 0,
      resizeStartY: 0,
      startX: 0,
      startY: 0,
      startWidth: 0,
      startHeight: 0,
      posX: 0,
      posY: 0,
      width: 200,
      height: 200
    };
  },
  methods: {
    startDrag(event) {
      event.preventDefault();
      this.isDragging = true;
      this.dragStartX = event.clientX;
      this.dragStartY = event.clientY;
      document.addEventListener('mousemove', this.drag);
      document.addEventListener('mouseup', this.stopDrag);
    },
    drag(event) {
      if (!this.isDragging) return;
      const deltaX = event.clientX - this.dragStartX;
      const deltaY = event.clientY - this.dragStartY;
      this.posX = this.startX + deltaX;
      this.posY = this.startY + deltaY;
    },
    stopDrag() {
      this.isDragging = false;
      this.startX = this.posX;
      this.startY = this.posY;
      document.removeEventListener('mousemove', this.drag);
      document.removeEventListener('mouseup', this.stopDrag);
    },
    startResize(event) {
      event.preventDefault();
      this.isResizing = true;
      this.resizeStartX = event.clientX;
      this.resizeStartY = event.clientY;
      this.startWidth = this.width;
      this.startHeight = this.height;
      document.addEventListener('mousemove', this.resize);
      document.addEventListener('mouseup', this.stopResize);
    },
    resize(event) {
      if (!this.isResizing) return;
      const deltaX = event.clientX - this.resizeStartX;
      const deltaY = event.clientY - this.resizeStartY;
      this.width = this.startWidth + deltaX;
      this.height = this.startHeight + deltaY;
    },
    stopResize() {
      this.isResizing = false;
      document.removeEventListener('mousemove', this.resize);
      document.removeEventListener('mouseup', this.stopResize);
    }
  }
};
</script>

<style>
.draggable {
  position: absolute;
  border: 2px solid #ccc;
}

.drag-handle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: move;
}

.resize-handle {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #4bffa0;
  cursor: nwse-resize;
  bottom: -5px;
  right: -5px;
}
</style>
