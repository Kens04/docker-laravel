@props(['message'])
@if ($message)
    <div class="p-4 m-2 rounded bg-green-100">
        {{ $message }}
        <!-- Be present above all else. - Naval Ravikant -->
    </div>
@endif
