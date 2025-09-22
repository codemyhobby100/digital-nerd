---
title: Untitled doc (2)
---
<SwmSnippet path="/app/page.tsx" line="27">

---

&nbsp;

```tsx
function useLenis(options?: Partial<LenisOptions>) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });

    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      // destroy is available at runtime
      // @ts-ignore
      if (typeof lenis.destroy === "function") lenis.destroy();
      lenisRef.current = null;
    };
    // stringify options to avoid stale closures while keeping stable deps
  }, [JSON.stringify(options || {})]);

  return lenisRef;
}
```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBZGlnaXRhbC1uZXJkJTNBJTNBY29kZW15aG9iYnkxMDA="><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
