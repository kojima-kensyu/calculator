import { renderHook, act } from '@testing-library/react';
import useCounter from '../useCounter';

describe('基本仕様', () => {
    test('初期表示　count:0', () => {
        const {result} = renderHook(() => useCounter(0));
        expect(result.current.count).toBe(0);
    });

    test('カウンター機能', () => {
        const {result} = renderHook(() => useCounter(0));
        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
        act(() => result.current.decrement());
        expect(result.current.count).toBe(0);
        act(() => result.current.increment());
        act(() => result.current.increment());
        expect(result.current.count).toBe(2);
        act(() => result.current.reset());
        expect(result.current.count).toBe(0);
        //マイナス表示ができないかを確認するテスト
        act(() => result.current.decrement());
        expect(result.current.count).toBe(0);
        act(() => result.current.increment_10());
        expect(result.current.count).toBe(10);
    })
});