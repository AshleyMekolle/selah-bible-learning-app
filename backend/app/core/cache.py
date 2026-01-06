import time

_cache = {}
TTL_SECONDS = 60 * 30  # 30 minutes


def get_cache(key: str):
    entry = _cache.get(key)
    if not entry:
        return None

    value, expires_at = entry
    if time.time() > expires_at:
        del _cache[key]
        return None

    return value


def set_cache(key: str, value):
    _cache[key] = (value, time.time() + TTL_SECONDS)
