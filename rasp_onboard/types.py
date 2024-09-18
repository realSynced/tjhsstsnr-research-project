from typing import Optional, List
from datetime import datetime
from enum import Enum

class User:
    id: str
    email: str
    created_at: datetime

class Profile:
    id: str
    user_id: str
    username: str
    full_name: Optional[str]
    avatar_url: Optional[str]
    bio: Optional[str]
    location: Optional[str]
    total_points: int
    created_at: datetime
    updated_at: datetime

class LeaderboardEntry:
    user_id: str
    username: str
    avatar_url: Optional[str]
    points: int
    rank: int

class ThemeChoice(Enum):
    LIGHT = "light"
    DARK = "dark"
    SYSTEM = "system"

class NotificationPreferences:
    email_notifications: bool
    push_notifications: bool
    leaderboard_updates: bool
    new_achievements: bool

class PrivacySettingChoice(Enum):
    PUBLIC = "public"
    FRIENDS = "friends"
    PRIVATE = "private"

class PrivacySettings:
    profile_visibility: PrivacySettingChoice
    show_location: bool
    show_activity: bool

class UserSettings:
    user_id: str
    notification_preferences: NotificationPreferences
    privacy_settings: PrivacySettings
    theme: ThemeChoice
    language: str
    created_at: datetime
    updated_at: datetime

class Location:
    latitude: float
    longitude: float

class TrashLogEntry:
    id: str
    user_id: str
    trash_type: str
    weight: float
    location: Location
    image_url: Optional[str]
    points_earned: int
    created_at: datetime

class Achievement:
    id: str
    name: str
    description: str
    icon_url: str
    points_value: int

class UserAchievement:
    user_id: str
    achievement_id: str
    date_earned: datetime
